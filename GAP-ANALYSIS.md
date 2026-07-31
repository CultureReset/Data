# GCR Database — What You Have vs. What's Empty vs. What's Missing

Built from `table-stats.csv` (295 tables carrying `entity_slug`, pulled live from `mkepugvdlktfsossumox` via the service_role key). Read-only analysis — nothing in the database was touched.

**Totals: 295 tables → 175 have data, 120 are 100% empty (0 rows).**

---

## 1. Tables you have WITH data (175)

Full counts are in `table-stats.csv` in this repo. Highlights:

| Table | Rows | Businesses |
|---|---|---|
| `entity` | 4,067 | 4,067 |
| `entity_tags` | 83,480 | 3,194 |
| `entity_photos` | 52,191 | 2,789 |
| `entity_modules` | 37,847 | 2,856 |
| `search_index` (view) | 35,182 | 4,034 |
| `entity_offer` | 18,138 | 1,478 |
| `entity_hours` | 15,116 | 2,137 |
| `catalog_items` | 12,216 | 216 |
| `menu_items` | 11,147 | 205 |
| `entity_reviews` | 10,988 | 2,248 |
| `entity_google_reviews` | 10,591 | 2,225 |
| `entity_theme` | 4,034 | 3,883 |
| industry fact tables (`industry_food_beverage`, `industry_retail`, `industry_hotel`, `industry_charter_fishing`, `industry_marina`, `industry_golf`, etc.) | varies | one row per business in that industry |

These are real and usable right now.

---

## 2. Tables that EXIST but are 100% EMPTY (120 — built, never used)

### Booking / availability / calendar (14 tables) — the biggest single gap
`booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`

You have `bookable_resources` (1,055 rows, populated) describing WHAT can be booked, but nothing tracking an actual booking, a calendar slot, or availability. The booking flow has no backing tables at all.

### Customer / commerce / loyalty (16 tables)
`customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`

No customer accounts, no order history, no loyalty tracking anywhere in the database.

### Staff
`business_staff` — no staff table populated for any business, no schedules, no roles.

### Reviews / social / content
`item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`

### Marina-specific (12 tables built, unused)
`marina_bar_menu_sections`, `marina_booking_links`, `marina_business_faqs`, `marina_data_conflicts`, `marina_page_sections`, `marina_payment_methods`, `marina_promotions`, `marina_slip_units`, `marina_sources`, `marina_storage`, `marina_what_to_bring`, `slip_agreements`
(Contrast: `marina_details`, `marina_products`, `marina_vessels`, `marina_contacts`, `marina_store_items`, `marina_bait_items`, `marina_seasonal_hours`, `marina_fuel_types`, `marina_profiles`, `marina_bridge_clearances` DO have data — marinas are half-built.)

### Charter/fishing-specific
`charter_trip_meeting_points`, `charter_trip_requirements`, `charter_trip_weather_policies`
(Contrast: `charter_trips`, `charter_trip_fish_species`, `charter_trip_included`, `charter_trip_what_to_bring`, `charter_target_species`, `charter_fishing_type`, `fish_species*` all have data.)

### Lodging-specific (all 6 empty — this whole category is unbuilt)
`lodging_checkin_locations`, `lodging_common_areas`, `lodging_parking_transport`, `lodging_property_facilities`, `lodging_property_rules`, `lodging_waterfront_access`

### Golf-specific (all 4 empty)
`golf_courses`, `golf_lessons`, `golf_memberships`, `golf_rentals`
(You do have `industry_golf`, 24 rows — the industry-fact row exists, none of the golf detail tables do.)

### Artist-specific (built for a feature never populated)
`artist_booking_requests`, `artist_follows`, `artist_goals`, `artist_shows`, `song_requests`, `music_links`
(Contrast: `artist_profiles`, 390 rows, `songs`, 15 rows — ARE populated.)

### Civic
`civic_contacts`, `civic_meetings`, `civic_services` — all empty (you have `industry_civic`, 39 rows, but none of the civic detail tables).

### Outdoor recreation / performing arts / photography detail tables
`outdoor_recreation_activities`, `outdoor_recreation_fees`, `performing_arts_shows`, `photography_packages`

### Tourist / TripSwipe
`tourist_group_saves`, `tourist_itineraries`, `tourist_photos`, `tourist_points`, `tripswipe_business_settings`, `tripswipe_sponsored`
(Contrast: `tourist_swipe_events` 354 rows, `tourist_seen` 238, `tourist_saves` 51, `tourist_click_events` 5 — DO have data. The core swipe tracking works; the itinerary/points/sponsorship layer doesn't.)

### Vessel detail
`vessel_engines`, `vessel_facilities`, `vessel_fishing_equipment`, `vessel_safety_equipment`
(Contrast: `vessels` 37 rows, `vessel_features` 13 rows — populated.)

### Transportation / parking
`transportation_routes` (you have `transportation_providers`, 1 row), `parking_lots` (you have `industry_parking`, 31 rows but no actual lot records)

### Generic commerce/catalog scaffolding never used
`brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`

### Misc entity-level scaffolding never used
`access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `activity_details`, `activity_schedules`, `attractions`, `class_schedule`, `beverage_servings`, `business_invites`, `utility_meter_readings`

Full raw list with row counts: `table-stats.csv` in this repo (rows sorted, 0-row tables are all at the bottom).

---

## 3. Categories that don't exist as tables AT ALL yet

These aren't just empty — there's no table to hold this data:

- **Pricing breakdowns** — no table splits price by rate-basis (hourly/daily/per-person/flat) or by audience (adult/child/senior/group). `offering_prices` (815 rows) and `pricing_items` (210 rows) exist but are flat, single-value.
- **Granular policies** — no dedicated `cancellation_policies`, `no_show_policy`, `damage_policy`, `pet_policy` tables. `entity_policies` (72 rows) and `entity_refund_policy` (4 rows) are the only policy tables, both nearly empty and both generic/flat rather than one-policy-per-concept.
- **Granular requirements** — `requirements` (609 rows) is a single flat table; no dedicated age/weight/height/license/swim-ability/health/ID/flight-height requirement tables split out by type.
- **Normalized contact info** — phone/email/website/social links/booking links currently live as plain columns on `entity` itself, not as their own rows-per-value tables (so a business can't have more than one of each without overloading a column).
- **Real estate** — no `listings`, `showings`, `neighborhood_guides`, or `valuation_requests` tables exist for the real-estate/property-management side (`industry_property_management` has 49 rows of industry-fact data only).
- **Staff detail** — no `staff_schedules`, `staff_specialties`, or `staff_certifications` — and even the base `business_staff` table is empty.
- **Photo subtypes** — no before/after pairs, no portfolio-category table, no catch-photo table for charter fishing, no video table, no virtual-tour table. All photos go through the single flat `entity_photos` (52,191 rows, populated) with no subtype distinction.

---

## 4. Newly-discovered views (not tables, but worth knowing)

Visible only via the service_role key, not the anon key: `search_index`, `entity_completeness_v`, `entity_items_v`, `entity_items_norm_v`, `v_industry_facts_slugs`. These are computed/joined views over the real tables above — useful for reads, not a place to write new data.

Also noted: `faqs` (305 rows) and `entity_faqs` (282 rows) are two separate tables covering the same concept — worth reconciling when the schema rebuild happens, same pattern as the `menu_items`/`catalog_items`/`entity_offer` drift already documented in `universal-vs-specific.csv`.

---

## 5. Bottom line

- **175 tables are real and working.**
- **120 tables were built and never wired up** — booking/availability/customer/loyalty is the single largest dead zone (30+ tables), followed by marina, lodging, golf, and artist feature sets that are each half-built (some detail tables populated, others sitting empty next to them).
- **A handful of categories have no table at all** — granular pricing, granular policies, granular requirements, normalized contact info, real estate, staff scheduling, and photo subtypes.

This is the reference for deciding, table by table, what to keep, what to finish wiring up, and what to design fresh — nothing here has been changed in the database.
