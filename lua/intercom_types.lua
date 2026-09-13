-- Typed models for the Intercom SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Contact
---@field created_at? number
---@field email? string
---@field id? string
---@field name? string
---@field phone? string
---@field role? string
---@field updated_at? number

---@class ContactLoadMatch
---@field id string

---@class ContactListMatch
---@field per_page? number

---@class ContactCreateData
---@field created_at? number
---@field email? string
---@field id? string
---@field name? string
---@field phone? string
---@field role? string
---@field updated_at? number

---@class ContactUpdateData
---@field id string
---@field created_at? number
---@field email? string
---@field name? string
---@field phone? string
---@field role? string
---@field updated_at? number

---@class ContactRemoveMatch
---@field id string

local M = {}

return M
