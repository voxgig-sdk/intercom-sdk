// Typed models for the Intercom SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Contact
 * @property {number} [created_at]
 * @property {string} [email]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [phone]
 * @property {string} [role]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} ContactLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ContactListMatch
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} ContactCreateData
 * @property {number} [created_at]
 * @property {string} [email]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [phone]
 * @property {string} [role]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} ContactUpdateData
 * @property {string} id
 * @property {number} [created_at]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [phone]
 * @property {string} [role]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} ContactRemoveMatch
 * @property {string} id
 */

