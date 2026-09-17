# intercom-cli

boru-driven command-line client **and** interactive REPL for the Intercom
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/intercom-cli)
make build

# 2. See usage (words, entities, env vars)
./intercom-cli --help

# 3. Provide credentials once, via the environment
export INTERCOM_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./intercom-cli list activity_log
./intercom-cli list activity_log_event_type

# 5. Override the API base URL for a single call
INTERCOM_BASE=https://api.example.com ./intercom-cli list activity_log

# 6. No arguments -> interactive REPL
./intercom-cli
intercom> list activity_log
intercom> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/intercom-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export INTERCOM_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/intercom-cli list activity_log
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./intercom-cli list activity_log
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export INTERCOM_APIKEY=sk_live_xxx            # API key
export INTERCOM_BASE=https://api.example.com  # optional: override the API base URL
./intercom-cli list activity_log
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `intercom>`). Each line is
evaluated as its own boru expression:

```text
$ ./intercom-cli
intercom> list activity_log
intercom> /help
intercom> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 89 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `activity_log`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `INTERCOM_APIKEY` | API key sent with every request. |
| `INTERCOM_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/intercom-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 89 entities this SDK exposes (any is valid as `<entity>`):

activity_log activity_log_event_type activity_log_list admin admin_with_app ai_call ai_content article article_search article_version article_version_list audience away_status_reason banner banner_dismiss brand call company company_attached_contact company_attached_segment company_list company_scroll contact contact_attached_company contact_list contact_segment content content_import_source content_search content_snippet conversation conversation_attribute conversation_attribute_list conversation_list conversation_participant custom_object_instance data data_attribute data_connector data_connector_execution_result data_connector_execution_result_list data_event data_event_summary data_export deleted deleted_article_object deleted_company_object deleted_data_connector_object deleted_internal_article_object deleted_object email external_page fin_agent handling_event help_center internal_article internal_article_search ip_allowlist job macro merge_history message news_item newsfeed note office_hour office_hours_exception office_hours_schedule paginated phone_switch reporting_data reporting_data_export segment side_conversation subscription subscription_type tag team team_metric_list ticket ticket_list ticket_reply ticket_state ticket_type ticket_type_attribute visitor whatsapp_message_status whatsapp_message_status_list workflow

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./intercom-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
