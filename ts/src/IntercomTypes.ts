// Typed models for the Intercom SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Contact {
  created_at?: number
  email?: string
  id?: string
  name?: string
  phone?: string
  role?: string
  updated_at?: number
}

export interface ContactLoadMatch {
  id: string
}

export interface ContactListMatch {
  per_page?: number
}

export interface ContactCreateData {
  created_at?: number
  email?: string
  id?: string
  name?: string
  phone?: string
  role?: string
  updated_at?: number
}

export interface ContactUpdateData {
  id: string
  created_at?: number
  email?: string
  name?: string
  phone?: string
  role?: string
  updated_at?: number
}

export interface ContactRemoveMatch {
  id: string
}

