<?php
declare(strict_types=1);

// Typed models for the Intercom SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Contact entity data model. */
class Contact
{
    public ?int $created_at = null;
    public ?string $email = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $phone = null;
    public ?string $role = null;
    public ?int $updated_at = null;
}

/** Request payload for Contact#load. */
class ContactLoadMatch
{
    public string $id;
}

/** Request payload for Contact#list. */
class ContactListMatch
{
    public ?int $per_page = null;
}

/** Request payload for Contact#create. */
class ContactCreateData
{
    public ?int $created_at = null;
    public ?string $email = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $phone = null;
    public ?string $role = null;
    public ?int $updated_at = null;
}

/** Request payload for Contact#update. */
class ContactUpdateData
{
    public string $id;
    public ?int $created_at = null;
    public ?string $email = null;
    public ?string $name = null;
    public ?string $phone = null;
    public ?string $role = null;
    public ?int $updated_at = null;
}

/** Request payload for Contact#remove. */
class ContactRemoveMatch
{
    public string $id;
}

