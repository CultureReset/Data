# What Tables Every Industry Needs — Usage + Gaps

Two things combined, per industry:
1. **What it already uses** — from the live per-slug data dump (`INDEX-all-businesses.csv`), every table with real rows, and what % of that industry's businesses have data in it.
2. **What it's missing** — tables that exist in the database (built, have columns, zero rows) that map to this industry's business type.

This is not clean — usage % below 100% for a CORE-type table (hours, tags, photos) means some businesses in that industry are missing data other businesses in the same industry have. That inconsistency is real and is called out per industry, not smoothed over.

---

## food_beverage  (597 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 597/597 (100%) | CORE |
| `industry_food_beverage` | 595/597 (99.7%) | CORE |
| `v_industry_facts_slugs` | 595/597 (99.7%) | CORE |
| `search_index` | 592/597 (99.2%) | CORE |
| `entity_completeness_v` | 585/597 (98%) | CORE |
| `entity_theme` | 530/597 (88.8%) | CORE |
| `entity_tags` | 432/597 (72.4%) | CORE |
| `ai_data_completeness_audit_full` | 408/597 (68.3%) | CORE |
| `ai_entity_intent_tags_full` | 408/597 (68.3%) | CORE |
| `ai_entity_profiles_full` | 408/597 (68.3%) | CORE |
| `entity_photos` | 388/597 (65%) | CORE |
| `entity_modules` | 374/597 (62.6%) | CORE |
| `ai_photo_index_full` | 373/597 (62.5%) | CORE |
| `entity_hours` | 359/597 (60.1%) | CORE |
| `entity_attributes` | 326/597 (54.6%) | COMMON |
| `entity_google_maps_links` | 320/597 (53.6%) | COMMON |
| `entity_nearby_landmarks` | 319/597 (53.4%) | COMMON |
| `entity_google_reviews` | 315/597 (52.8%) | COMMON |
| `entity_nearby_landmark_types` | 315/597 (52.8%) | COMMON |
| `entity_reviews` | 315/597 (52.8%) | COMMON |
| `entity_address_areas` | 200/597 (33.5%) | COMMON |
| `catalog_sections` | 185/597 (31%) | COMMON |
| `catalog_section_days` | 181/597 (30.3%) | COMMON |
| `entity_offer` | 176/597 (29.5%) | COMMON |
| `entity_offer_section` | 175/597 (29.3%) | COMMON |
| `entity_items_norm_v` | 163/597 (27.3%) | COMMON |
| `entity_items_v` | 163/597 (27.3%) | COMMON |
| `catalog_items` | 158/597 (26.5%) | COMMON |
| `menu_sections` | 152/597 (25.5%) | COMMON |
| `menu_items` | 148/597 (24.8%) | COMMON |
| `menu_section_days` | 148/597 (24.8%) | COMMON |
| `menu_section_details` | 148/597 (24.8%) | COMMON |
| `legacy_photo_migration_queue` | 145/597 (24.3%) | COMMON |
| `ai_unified_search_items_full` | 144/597 (24.1%) | COMMON |
| `entity_sources` | 121/597 (20.3%) | COMMON |
| `recovery_import_log` | 116/597 (19.4%) | COMMON |
| `entity_conflicts` | 96/597 (16.1%) | COMMON |
| `entity_events` | 87/597 (14.6%) | PARTIAL |
| `ai_event_planner_index_full` | 68/597 (11.4%) | PARTIAL |
| `entity_secondary_hours` | 67/597 (11.2%) | PARTIAL |
| `happy_hour_sections` | 61/597 (10.2%) | PARTIAL |
| `tourist_seen` | 55/597 (9.2%) | PARTIAL |
| `tourist_swipe_events` | 55/597 (9.2%) | PARTIAL |
| `entity_highlights` | 49/597 (8.2%) | PARTIAL |
| `entity_good_for` | 48/597 (8%) | PARTIAL |
| `drink_items` | 32/597 (5.4%) | PARTIAL |
| `drink_sections` | 32/597 (5.4%) | PARTIAL |
| `ai_data_quality_audit` | 28/597 (4.7%) | PARTIAL |
| `ai_data_quality_issues` | 28/597 (4.7%) | PARTIAL |
| `ai_planner_intent_tags` | 28/597 (4.7%) | PARTIAL |
| `ai_planner_profile_tags` | 28/597 (4.7%) | PARTIAL |
| `ai_planner_profiles` | 28/597 (4.7%) | PARTIAL |
| `ai_voice_snippets` | 28/597 (4.7%) | PARTIAL |
| `ai_menu_item_tag_values` | 27/597 (4.5%) | PARTIAL |
| `ai_menu_item_tags` | 27/597 (4.5%) | PARTIAL |
| `happy_hour_items` | 25/597 (4.2%) | PARTIAL |
| `entity_specials` | 22/597 (3.7%) | PARTIAL |
| `menu_item_details` | 22/597 (3.7%) | PARTIAL |
| `entity_amenities` | 21/597 (3.5%) | PARTIAL |
| `tourist_saves` | 21/597 (3.5%) | PARTIAL |
| `ai_drink_item_tag_values` | 19/597 (3.2%) | PARTIAL |
| `ai_drink_item_tags` | 19/597 (3.2%) | PARTIAL |
| `entity_policies` | 15/597 (2.5%) | PARTIAL |
| `entity_seo` | 15/597 (2.5%) | PARTIAL |
| `entity_sections` | 13/597 (2.2%) | PARTIAL |
| `entity_seo_keywords` | 6/597 (1%) | PARTIAL |
| `entity_known_for` | 5/597 (0.8%) | PARTIAL |
| `happy_hour_section_days` | 5/597 (0.8%) | PARTIAL |
| `bookable_resources` | 4/597 (0.7%) | PARTIAL |
| `bookable_resources_json_backup` | 4/597 (0.7%) | PARTIAL |
| `menu_item_tags` | 3/597 (0.5%) | PARTIAL |
| `menu_period_days` | 3/597 (0.5%) | PARTIAL |
| `menu_periods` | 3/597 (0.5%) | PARTIAL |
| `entity_faqs` | 2/597 (0.3%) | PARTIAL |
| `entity_gallery` | 2/597 (0.3%) | PARTIAL |
| `pricing_items` | 1/597 (0.2%) | PARTIAL |
| `entity_rotating_section_items` | 1/597 (0.2%) | PARTIAL |
| `entity_rotating_sections` | 1/597 (0.2%) | PARTIAL |
| `entity_sides` | 1/597 (0.2%) | PARTIAL |
| `tourist_click_events` | 1/597 (0.2%) | PARTIAL |
| `drink_section_days` | 1/597 (0.2%) | PARTIAL |
| `entity_section_items` | 1/597 (0.2%) | PARTIAL |
| `menu_item_preparation_choices` | 1/597 (0.2%) | PARTIAL |
| `menu_item_requirements` | 1/597 (0.2%) | PARTIAL |
| `menu_item_served_with` | 1/597 (0.2%) | PARTIAL |
| `offerings` | 1/597 (0.2%) | PARTIAL |
| `entity_fuel_prices` | 1/597 (0.2%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `beverage_servings`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## retail  (541 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 541/541 (100%) | CORE |
| `search_index` | 540/541 (99.8%) | CORE |
| `industry_retail` | 538/541 (99.4%) | CORE |
| `v_industry_facts_slugs` | 538/541 (99.4%) | CORE |
| `entity_completeness_v` | 533/541 (98.5%) | CORE |
| `entity_theme` | 522/541 (96.5%) | CORE |
| `entity_tags` | 388/541 (71.7%) | CORE |
| `ai_data_completeness_audit_full` | 352/541 (65.1%) | CORE |
| `ai_entity_intent_tags_full` | 352/541 (65.1%) | CORE |
| `ai_entity_profiles_full` | 352/541 (65.1%) | CORE |
| `entity_modules` | 341/541 (63%) | CORE |
| `entity_photos` | 335/541 (61.9%) | CORE |
| `entity_attributes` | 328/541 (60.6%) | CORE |
| `entity_hours` | 321/541 (59.3%) | COMMON |
| `entity_google_maps_links` | 313/541 (57.9%) | COMMON |
| `ai_photo_index_full` | 312/541 (57.7%) | COMMON |
| `entity_nearby_landmarks` | 309/541 (57.1%) | COMMON |
| `entity_nearby_landmark_types` | 308/541 (56.9%) | COMMON |
| `entity_google_reviews` | 307/541 (56.7%) | COMMON |
| `entity_reviews` | 307/541 (56.7%) | COMMON |
| `entity_address_areas` | 223/541 (41.2%) | COMMON |
| `recovery_import_log` | 128/541 (23.7%) | COMMON |
| `legacy_photo_migration_queue` | 105/541 (19.4%) | COMMON |
| `entity_sources` | 67/541 (12.4%) | PARTIAL |
| `entity_seo` | 21/541 (3.9%) | PARTIAL |
| `entity_conflicts` | 21/541 (3.9%) | PARTIAL |
| `entity_sections` | 17/541 (3.1%) | PARTIAL |
| `entity_seo_keywords` | 16/541 (3%) | PARTIAL |
| `entity_highlights` | 10/541 (1.8%) | PARTIAL |
| `entity_good_for` | 9/541 (1.7%) | PARTIAL |
| `entity_secondary_hours` | 8/541 (1.5%) | PARTIAL |
| `entity_items_norm_v` | 7/541 (1.3%) | PARTIAL |
| `entity_items_v` | 7/541 (1.3%) | PARTIAL |
| `entity_offer` | 7/541 (1.3%) | PARTIAL |
| `ai_unified_search_items_full` | 6/541 (1.1%) | PARTIAL |
| `catalog_items` | 5/541 (0.9%) | PARTIAL |
| `catalog_section_days` | 5/541 (0.9%) | PARTIAL |
| `catalog_sections` | 5/541 (0.9%) | PARTIAL |
| `entity_offer_section` | 5/541 (0.9%) | PARTIAL |
| `inventory_items` | 5/541 (0.9%) | PARTIAL |
| `menu_items` | 5/541 (0.9%) | PARTIAL |
| `menu_section_days` | 5/541 (0.9%) | PARTIAL |
| `menu_section_details` | 5/541 (0.9%) | PARTIAL |
| `menu_sections` | 5/541 (0.9%) | PARTIAL |
| `products` | 5/541 (0.9%) | PARTIAL |
| `entity_events` | 3/541 (0.6%) | PARTIAL |
| `entity_known_for` | 3/541 (0.6%) | PARTIAL |
| `bookable_resources` | 2/541 (0.4%) | PARTIAL |
| `bookable_resources_json_backup` | 2/541 (0.4%) | PARTIAL |
| `ai_event_planner_index_full` | 2/541 (0.4%) | PARTIAL |
| `drink_items` | 1/541 (0.2%) | PARTIAL |
| `drink_sections` | 1/541 (0.2%) | PARTIAL |
| `offerings` | 1/541 (0.2%) | PARTIAL |
| `entity_faqs` | 1/541 (0.2%) | PARTIAL |
| `faqs` | 1/541 (0.2%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## other  (452 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 452/452 (100%) | CORE |
| `entity_completeness_v` | 451/452 (99.8%) | CORE |
| `search_index` | 451/452 (99.8%) | CORE |
| `entity_theme` | 450/452 (99.6%) | CORE |
| `entity_tags` | 364/452 (80.5%) | CORE |
| `entity_photos` | 318/452 (70.4%) | CORE |
| `ai_data_completeness_audit_full` | 286/452 (63.3%) | CORE |
| `ai_entity_intent_tags_full` | 286/452 (63.3%) | CORE |
| `ai_entity_profiles_full` | 286/452 (63.3%) | CORE |
| `entity_modules` | 267/452 (59.1%) | COMMON |
| `entity_google_maps_links` | 253/452 (56%) | COMMON |
| `ai_photo_index_full` | 252/452 (55.8%) | COMMON |
| `entity_nearby_landmarks` | 234/452 (51.8%) | COMMON |
| `entity_nearby_landmark_types` | 229/452 (50.7%) | COMMON |
| `entity_attributes` | 228/452 (50.4%) | COMMON |
| `entity_reviews` | 226/452 (50%) | COMMON |
| `entity_google_reviews` | 225/452 (49.8%) | COMMON |
| `entity_offer` | 224/452 (49.6%) | COMMON |
| `entity_items_norm_v` | 221/452 (48.9%) | COMMON |
| `entity_items_v` | 221/452 (48.9%) | COMMON |
| `entity_hours` | 218/452 (48.2%) | COMMON |
| `bookable_resources` | 212/452 (46.9%) | COMMON |
| `bookable_resources_json_backup` | 211/452 (46.7%) | COMMON |
| `entity_address_areas` | 144/452 (31.9%) | COMMON |
| `entity_sources` | 120/452 (26.5%) | COMMON |
| `recovery_import_log` | 59/452 (13.1%) | PARTIAL |
| `legacy_photo_migration_queue` | 49/452 (10.8%) | PARTIAL |
| `entity_seo` | 32/452 (7.1%) | PARTIAL |
| `offerings` | 11/452 (2.4%) | PARTIAL |
| `entity_good_for` | 9/452 (2%) | PARTIAL |
| `entity_highlights` | 9/452 (2%) | PARTIAL |
| `offering_prices` | 9/452 (2%) | PARTIAL |
| `entity_sections` | 9/452 (2%) | PARTIAL |
| `entity_conflicts` | 9/452 (2%) | PARTIAL |
| `entity_seo_keywords` | 8/452 (1.8%) | PARTIAL |
| `entity_secondary_hours` | 7/452 (1.5%) | PARTIAL |
| `entity_events` | 6/452 (1.3%) | PARTIAL |
| `entity_section_items` | 3/452 (0.7%) | PARTIAL |
| `tourist_seen` | 3/452 (0.7%) | PARTIAL |
| `tourist_swipe_events` | 3/452 (0.7%) | PARTIAL |
| `catalog_items` | 2/452 (0.4%) | PARTIAL |
| `catalog_section_days` | 2/452 (0.4%) | PARTIAL |
| `catalog_sections` | 2/452 (0.4%) | PARTIAL |
| `entity_offer_section` | 2/452 (0.4%) | PARTIAL |
| `menu_items` | 2/452 (0.4%) | PARTIAL |
| `menu_section_days` | 2/452 (0.4%) | PARTIAL |
| `menu_section_details` | 2/452 (0.4%) | PARTIAL |
| `menu_sections` | 2/452 (0.4%) | PARTIAL |
| `requirements` | 2/452 (0.4%) | PARTIAL |
| `ai_event_planner_index_full` | 2/452 (0.4%) | PARTIAL |
| `ai_unified_search_items_full` | 2/452 (0.4%) | PARTIAL |
| `entity_amenities` | 1/452 (0.2%) | PARTIAL |
| `entity_policies` | 1/452 (0.2%) | PARTIAL |
| `entity_section_items_metadata_backup` | 1/452 (0.2%) | PARTIAL |
| `vessels` | 1/452 (0.2%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## condo  (295 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 295/295 (100%) | CORE |
| `entity_completeness_v` | 295/295 (100%) | CORE |
| `industry_condo` | 295/295 (100%) | CORE |
| `v_industry_facts_slugs` | 295/295 (100%) | CORE |
| `search_index` | 283/295 (95.9%) | CORE |
| `entity_theme` | 260/295 (88.1%) | CORE |
| `entity_modules` | 186/295 (63.1%) | CORE |
| `entity_tags` | 176/295 (59.7%) | COMMON |
| `entity_photos` | 159/295 (53.9%) | COMMON |
| `entity_sources` | 123/295 (41.7%) | COMMON |
| `entity_items_norm_v` | 121/295 (41%) | COMMON |
| `entity_items_v` | 121/295 (41%) | COMMON |
| `ai_data_completeness_audit_full` | 120/295 (40.7%) | COMMON |
| `ai_entity_intent_tags_full` | 120/295 (40.7%) | COMMON |
| `ai_entity_profiles_full` | 120/295 (40.7%) | COMMON |
| `entity_offer` | 120/295 (40.7%) | COMMON |
| `bookable_resources` | 119/295 (40.3%) | COMMON |
| `bookable_resources_json_backup` | 119/295 (40.3%) | COMMON |
| `ai_photo_index_full` | 108/295 (36.6%) | COMMON |
| `entity_section_items` | 108/295 (36.6%) | COMMON |
| `entity_section_items_metadata_backup` | 108/295 (36.6%) | COMMON |
| `entity_sections` | 108/295 (36.6%) | COMMON |
| `rental_units` | 107/295 (36.3%) | COMMON |
| `entity_reviews` | 100/295 (33.9%) | COMMON |
| `entity_google_maps_links` | 91/295 (30.8%) | COMMON |
| `entity_nearby_landmarks` | 91/295 (30.8%) | COMMON |
| `entity_attributes` | 89/295 (30.2%) | COMMON |
| `entity_nearby_landmark_types` | 88/295 (29.8%) | COMMON |
| `entity_google_reviews` | 83/295 (28.1%) | COMMON |
| `entity_address_areas` | 76/295 (25.8%) | COMMON |
| `entity_hours` | 69/295 (23.4%) | COMMON |
| `entity_amenities` | 59/295 (20%) | COMMON |
| `legacy_photo_migration_queue` | 53/295 (18%) | COMMON |
| `entity_conflicts` | 38/295 (12.9%) | PARTIAL |
| `recovery_import_log` | 27/295 (9.2%) | PARTIAL |
| `tourist_seen` | 25/295 (8.5%) | PARTIAL |
| `tourist_swipe_events` | 25/295 (8.5%) | PARTIAL |
| `entity_seo` | 17/295 (5.8%) | PARTIAL |
| `entity_faqs` | 15/295 (5.1%) | PARTIAL |
| `faqs` | 15/295 (5.1%) | PARTIAL |
| `entity_external_listing` | 5/295 (1.7%) | PARTIAL |
| `entity_specials` | 3/295 (1%) | PARTIAL |
| `entity_good_for` | 2/295 (0.7%) | PARTIAL |
| `entity_highlights` | 2/295 (0.7%) | PARTIAL |
| `amenities` | 2/295 (0.7%) | PARTIAL |
| `entity_events` | 1/295 (0.3%) | PARTIAL |
| `industry_vacation_rental` | 1/295 (0.3%) | PARTIAL |
| `tourist_saves` | 1/295 (0.3%) | PARTIAL |
| `offering_prices` | 1/295 (0.3%) | PARTIAL |
| `offerings` | 1/295 (0.3%) | PARTIAL |
| `offerings_details_backup` | 1/295 (0.3%) | PARTIAL |
| `requirements` | 1/295 (0.3%) | PARTIAL |
| `whats_included` | 1/295 (0.3%) | PARTIAL |
| `entity_policies` | 1/295 (0.3%) | PARTIAL |
| `property_details` | 1/295 (0.3%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `lodging_checkin_locations`, `lodging_common_areas`, `lodging_parking_transport`, `lodging_property_facilities`, `lodging_property_rules`, `lodging_waterfront_access`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## charter_fishing  (193 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 193/193 (100%) | CORE |
| `entity_completeness_v` | 193/193 (100%) | CORE |
| `search_index` | 192/193 (99.5%) | CORE |
| `entity_theme` | 191/193 (99%) | CORE |
| `industry_charter_fishing` | 191/193 (99%) | CORE |
| `v_industry_facts_slugs` | 191/193 (99%) | CORE |
| `entity_tags` | 183/193 (94.8%) | CORE |
| `entity_photos` | 138/193 (71.5%) | CORE |
| `entity_attributes` | 130/193 (67.4%) | CORE |
| `entity_sources` | 106/193 (54.9%) | COMMON |
| `entity_modules` | 105/193 (54.4%) | COMMON |
| `ai_data_completeness_audit_full` | 103/193 (53.4%) | COMMON |
| `ai_entity_intent_tags_full` | 103/193 (53.4%) | COMMON |
| `ai_entity_profiles_full` | 103/193 (53.4%) | COMMON |
| `ai_photo_index_full` | 98/193 (50.8%) | COMMON |
| `entity_offer` | 97/193 (50.3%) | COMMON |
| `entity_google_maps_links` | 95/193 (49.2%) | COMMON |
| `entity_hours` | 93/193 (48.2%) | COMMON |
| `entity_google_reviews` | 90/193 (46.6%) | COMMON |
| `entity_reviews` | 90/193 (46.6%) | COMMON |
| `entity_nearby_landmark_types` | 89/193 (46.1%) | COMMON |
| `entity_nearby_landmarks` | 89/193 (46.1%) | COMMON |
| `entity_items_norm_v` | 88/193 (45.6%) | COMMON |
| `entity_items_v` | 88/193 (45.6%) | COMMON |
| `offerings` | 83/193 (43%) | COMMON |
| `legacy_photo_migration_queue` | 73/193 (37.8%) | COMMON |
| `offering_prices` | 69/193 (35.8%) | COMMON |
| `whats_included` | 62/193 (32.1%) | COMMON |
| `entity_offer_fee` | 50/193 (25.9%) | COMMON |
| `offerings_details_backup` | 50/193 (25.9%) | COMMON |
| `requirements` | 49/193 (25.4%) | COMMON |
| `entity_address_areas` | 29/193 (15%) | COMMON |
| `tourist_seen` | 26/193 (13.5%) | PARTIAL |
| `tourist_swipe_events` | 26/193 (13.5%) | PARTIAL |
| `bookable_resources` | 21/193 (10.9%) | PARTIAL |
| `charter_fishing_type` | 17/193 (8.8%) | PARTIAL |
| `vessels` | 15/193 (7.8%) | PARTIAL |
| `entity_conflicts` | 15/193 (7.8%) | PARTIAL |
| `entity_sections` | 13/193 (6.7%) | PARTIAL |
| `entity_seo_keywords` | 12/193 (6.2%) | PARTIAL |
| `tourist_saves` | 11/193 (5.7%) | PARTIAL |
| `entity_section_items` | 9/193 (4.7%) | PARTIAL |
| `bookable_resources_json_backup` | 6/193 (3.1%) | PARTIAL |
| `entity_amenities` | 6/193 (3.1%) | PARTIAL |
| `entity_seo` | 6/193 (3.1%) | PARTIAL |
| `entity_highlights` | 5/193 (2.6%) | PARTIAL |
| `recovery_import_log` | 5/193 (2.6%) | PARTIAL |
| `pricing_items` | 4/193 (2.1%) | PARTIAL |
| `entity_policies` | 3/193 (1.6%) | PARTIAL |
| `entity_faqs` | 2/193 (1%) | PARTIAL |
| `entity_good_for` | 2/193 (1%) | PARTIAL |
| `meeting_points` | 2/193 (1%) | PARTIAL |
| `whats_excluded` | 2/193 (1%) | PARTIAL |
| `entity_secondary_hours` | 1/193 (0.5%) | PARTIAL |
| `entity_section_items_metadata_backup` | 1/193 (0.5%) | PARTIAL |
| `entity_known_for` | 1/193 (0.5%) | PARTIAL |
| `faqs` | 1/193 (0.5%) | PARTIAL |
| `tourist_click_events` | 1/193 (0.5%) | PARTIAL |
| `entity_refund_policy` | 1/193 (0.5%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `charter_trip_meeting_points`, `charter_trip_requirements`, `charter_trip_weather_policies`, `vessel_engines`, `vessel_facilities`, `vessel_fishing_equipment`, `vessel_safety_equipment`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## outdoor_recreation  (191 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 191/191 (100%) | CORE |
| `entity_completeness_v` | 191/191 (100%) | CORE |
| `search_index` | 191/191 (100%) | CORE |
| `v_industry_facts_slugs` | 188/191 (98.4%) | CORE |
| `industry_outdoor_recreation` | 186/191 (97.4%) | CORE |
| `entity_theme` | 184/191 (96.3%) | CORE |
| `entity_tags` | 163/191 (85.3%) | CORE |
| `ai_data_completeness_audit_full` | 134/191 (70.2%) | CORE |
| `ai_entity_intent_tags_full` | 134/191 (70.2%) | CORE |
| `ai_entity_profiles_full` | 134/191 (70.2%) | CORE |
| `entity_modules` | 134/191 (70.2%) | CORE |
| `entity_google_maps_links` | 129/191 (67.5%) | CORE |
| `entity_photos` | 128/191 (67%) | CORE |
| `ai_photo_index_full` | 126/191 (66%) | CORE |
| `entity_attributes` | 122/191 (63.9%) | CORE |
| `entity_google_reviews` | 120/191 (62.8%) | CORE |
| `entity_reviews` | 120/191 (62.8%) | CORE |
| `entity_nearby_landmarks` | 107/191 (56%) | COMMON |
| `entity_nearby_landmark_types` | 92/191 (48.2%) | COMMON |
| `entity_address_areas` | 81/191 (42.4%) | COMMON |
| `entity_hours` | 81/191 (42.4%) | COMMON |
| `entity_sources` | 44/191 (23%) | COMMON |
| `legacy_photo_migration_queue` | 44/191 (23%) | COMMON |
| `recovery_import_log` | 24/191 (12.6%) | PARTIAL |
| `entity_offer` | 20/191 (10.5%) | PARTIAL |
| `entity_items_norm_v` | 14/191 (7.3%) | PARTIAL |
| `entity_items_v` | 14/191 (7.3%) | PARTIAL |
| `entity_sections` | 11/191 (5.8%) | PARTIAL |
| `entity_conflicts` | 11/191 (5.8%) | PARTIAL |
| `entity_seo_keywords` | 10/191 (5.2%) | PARTIAL |
| `entity_events` | 9/191 (4.7%) | PARTIAL |
| `bookable_resources` | 9/191 (4.7%) | PARTIAL |
| `bookable_resources_json_backup` | 9/191 (4.7%) | PARTIAL |
| `entity_seo` | 7/191 (3.7%) | PARTIAL |
| `entity_section_items` | 3/191 (1.6%) | PARTIAL |
| `offering_prices` | 2/191 (1%) | PARTIAL |
| `offerings` | 2/191 (1%) | PARTIAL |
| `tourist_seen` | 2/191 (1%) | PARTIAL |
| `tourist_swipe_events` | 2/191 (1%) | PARTIAL |
| `entity_good_for` | 1/191 (0.5%) | PARTIAL |
| `entity_highlights` | 1/191 (0.5%) | PARTIAL |
| `ai_event_planner_index_full` | 1/191 (0.5%) | PARTIAL |
| `ai_unified_search_items_full` | 1/191 (0.5%) | PARTIAL |
| `industry_attraction` | 1/191 (0.5%) | PARTIAL |
| `industry_retail` | 1/191 (0.5%) | PARTIAL |
| `entity_amenities` | 1/191 (0.5%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `outdoor_recreation_activities`, `outdoor_recreation_fees`, `activity_details`, `activity_schedules`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## hotel  (189 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 189/189 (100%) | CORE |
| `industry_hotel` | 189/189 (100%) | CORE |
| `search_index` | 189/189 (100%) | CORE |
| `v_industry_facts_slugs` | 189/189 (100%) | CORE |
| `entity_completeness_v` | 188/189 (99.5%) | CORE |
| `entity_theme` | 187/189 (98.9%) | CORE |
| `ai_data_completeness_audit_full` | 173/189 (91.5%) | CORE |
| `ai_entity_intent_tags_full` | 173/189 (91.5%) | CORE |
| `ai_entity_profiles_full` | 173/189 (91.5%) | CORE |
| `entity_modules` | 169/189 (89.4%) | CORE |
| `entity_tags` | 157/189 (83.1%) | CORE |
| `entity_google_maps_links` | 147/189 (77.8%) | CORE |
| `entity_nearby_landmark_types` | 146/189 (77.2%) | CORE |
| `entity_nearby_landmarks` | 146/189 (77.2%) | CORE |
| `entity_attributes` | 106/189 (56.1%) | COMMON |
| `entity_photos` | 105/189 (55.6%) | COMMON |
| `entity_google_reviews` | 104/189 (55%) | COMMON |
| `entity_reviews` | 104/189 (55%) | COMMON |
| `ai_photo_index_full` | 102/189 (54%) | COMMON |
| `entity_address_areas` | 92/189 (48.7%) | COMMON |
| `legacy_photo_migration_queue` | 61/189 (32.3%) | COMMON |
| `entity_items_norm_v` | 53/189 (28%) | COMMON |
| `entity_items_v` | 53/189 (28%) | COMMON |
| `entity_offer` | 53/189 (28%) | COMMON |
| `bookable_resources` | 52/189 (27.5%) | COMMON |
| `bookable_resources_json_backup` | 52/189 (27.5%) | COMMON |
| `entity_hours` | 29/189 (15.3%) | COMMON |
| `entity_sources` | 18/189 (9.5%) | PARTIAL |
| `recovery_import_log` | 15/189 (7.9%) | PARTIAL |
| `tourist_seen` | 11/189 (5.8%) | PARTIAL |
| `tourist_swipe_events` | 11/189 (5.8%) | PARTIAL |
| `entity_seo` | 8/189 (4.2%) | PARTIAL |
| `entity_good_for` | 5/189 (2.6%) | PARTIAL |
| `entity_highlights` | 5/189 (2.6%) | PARTIAL |
| `tourist_saves` | 4/189 (2.1%) | PARTIAL |
| `entity_conflicts` | 3/189 (1.6%) | PARTIAL |
| `ai_unified_search_items_full` | 2/189 (1.1%) | PARTIAL |
| `catalog_section_days` | 2/189 (1.1%) | PARTIAL |
| `catalog_sections` | 2/189 (1.1%) | PARTIAL |
| `entity_events` | 2/189 (1.1%) | PARTIAL |
| `entity_secondary_hours` | 2/189 (1.1%) | PARTIAL |
| `catalog_items` | 1/189 (0.5%) | PARTIAL |
| `drink_items` | 1/189 (0.5%) | PARTIAL |
| `drink_sections` | 1/189 (0.5%) | PARTIAL |
| `entity_offer_section` | 1/189 (0.5%) | PARTIAL |
| `menu_items` | 1/189 (0.5%) | PARTIAL |
| `menu_section_days` | 1/189 (0.5%) | PARTIAL |
| `menu_section_details` | 1/189 (0.5%) | PARTIAL |
| `menu_sections` | 1/189 (0.5%) | PARTIAL |
| `entity_amenities` | 1/189 (0.5%) | PARTIAL |
| `ai_event_planner_index_full` | 1/189 (0.5%) | PARTIAL |
| `amenities` | 1/189 (0.5%) | PARTIAL |
| `entity_specials` | 1/189 (0.5%) | PARTIAL |
| `event_space` | 1/189 (0.5%) | PARTIAL |
| `property_details` | 1/189 (0.5%) | PARTIAL |
| `room_types` | 1/189 (0.5%) | PARTIAL |
| `happy_hour_sections` | 1/189 (0.5%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `lodging_checkin_locations`, `lodging_common_areas`, `lodging_parking_transport`, `lodging_property_facilities`, `lodging_property_rules`, `lodging_waterfront_access`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## tour_operator  (164 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 164/164 (100%) | CORE |
| `entity_completeness_v` | 162/164 (98.8%) | CORE |
| `industry_tour_operator` | 162/164 (98.8%) | CORE |
| `v_industry_facts_slugs` | 162/164 (98.8%) | CORE |
| `entity_theme` | 161/164 (98.2%) | CORE |
| `search_index` | 161/164 (98.2%) | CORE |
| `ai_data_completeness_audit_full` | 153/164 (93.3%) | CORE |
| `ai_entity_intent_tags_full` | 153/164 (93.3%) | CORE |
| `ai_entity_profiles_full` | 153/164 (93.3%) | CORE |
| `entity_tags` | 153/164 (93.3%) | CORE |
| `entity_modules` | 152/164 (92.7%) | CORE |
| `entity_photos` | 150/164 (91.5%) | CORE |
| `entity_google_maps_links` | 147/164 (89.6%) | CORE |
| `entity_attributes` | 145/164 (88.4%) | CORE |
| `ai_photo_index_full` | 142/164 (86.6%) | CORE |
| `entity_google_reviews` | 140/164 (85.4%) | CORE |
| `entity_hours` | 140/164 (85.4%) | CORE |
| `entity_nearby_landmark_types` | 140/164 (85.4%) | CORE |
| `entity_nearby_landmarks` | 140/164 (85.4%) | CORE |
| `entity_reviews` | 140/164 (85.4%) | CORE |
| `entity_address_areas` | 97/164 (59.1%) | COMMON |
| `legacy_photo_migration_queue` | 70/164 (42.7%) | COMMON |
| `entity_sources` | 66/164 (40.2%) | COMMON |
| `entity_offer` | 22/164 (13.4%) | PARTIAL |
| `entity_seo` | 18/164 (11%) | PARTIAL |
| `entity_items_norm_v` | 17/164 (10.4%) | PARTIAL |
| `entity_items_v` | 17/164 (10.4%) | PARTIAL |
| `entity_highlights` | 16/164 (9.8%) | PARTIAL |
| `offerings` | 16/164 (9.8%) | PARTIAL |
| `activity_options` | 14/164 (8.5%) | PARTIAL |
| `offering_prices` | 11/164 (6.7%) | PARTIAL |
| `entity_sections` | 9/164 (5.5%) | PARTIAL |
| `meeting_points` | 8/164 (4.9%) | PARTIAL |
| `requirements` | 8/164 (4.9%) | PARTIAL |
| `recovery_import_log` | 8/164 (4.9%) | PARTIAL |
| `entity_seo_keywords` | 7/164 (4.3%) | PARTIAL |
| `whats_included` | 6/164 (3.7%) | PARTIAL |
| `entity_conflicts` | 4/164 (2.4%) | PARTIAL |
| `entity_section_items` | 4/164 (2.4%) | PARTIAL |
| `tourist_seen` | 4/164 (2.4%) | PARTIAL |
| `tourist_swipe_events` | 4/164 (2.4%) | PARTIAL |
| `entity_good_for` | 4/164 (2.4%) | PARTIAL |
| `whats_excluded` | 3/164 (1.8%) | PARTIAL |
| `bookable_resources` | 3/164 (1.8%) | PARTIAL |
| `vessels` | 2/164 (1.2%) | PARTIAL |
| `entity_secondary_hours` | 2/164 (1.2%) | PARTIAL |
| `entity_specials` | 2/164 (1.2%) | PARTIAL |
| `entity_offer_section` | 2/164 (1.2%) | PARTIAL |
| `pricing_items` | 2/164 (1.2%) | PARTIAL |
| `tourist_click_events` | 1/164 (0.6%) | PARTIAL |
| `entity_amenities` | 1/164 (0.6%) | PARTIAL |
| `bookable_resources_json_backup` | 1/164 (0.6%) | PARTIAL |
| `faqs` | 1/164 (0.6%) | PARTIAL |
| `industry_condo` | 1/164 (0.6%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `activity_details`, `activity_schedules`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## personal_care  (161 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 161/161 (100%) | CORE |
| `entity_completeness_v` | 161/161 (100%) | CORE |
| `industry_personal_care` | 161/161 (100%) | CORE |
| `v_industry_facts_slugs` | 161/161 (100%) | CORE |
| `entity_theme` | 159/161 (98.8%) | CORE |
| `search_index` | 159/161 (98.8%) | CORE |
| `ai_data_completeness_audit_full` | 150/161 (93.2%) | CORE |
| `ai_entity_intent_tags_full` | 150/161 (93.2%) | CORE |
| `ai_entity_profiles_full` | 150/161 (93.2%) | CORE |
| `entity_tags` | 148/161 (91.9%) | CORE |
| `entity_items_norm_v` | 147/161 (91.3%) | CORE |
| `entity_items_v` | 147/161 (91.3%) | CORE |
| `entity_offer` | 147/161 (91.3%) | CORE |
| `bookable_resources` | 146/161 (90.7%) | CORE |
| `bookable_resources_json_backup` | 146/161 (90.7%) | CORE |
| `entity_modules` | 142/161 (88.2%) | CORE |
| `entity_google_maps_links` | 136/161 (84.5%) | CORE |
| `entity_nearby_landmark_types` | 135/161 (83.9%) | CORE |
| `entity_nearby_landmarks` | 135/161 (83.9%) | CORE |
| `entity_hours` | 133/161 (82.6%) | CORE |
| `ai_photo_index_full` | 132/161 (82%) | CORE |
| `entity_attributes` | 132/161 (82%) | CORE |
| `entity_photos` | 132/161 (82%) | CORE |
| `entity_google_reviews` | 130/161 (80.7%) | CORE |
| `entity_reviews` | 130/161 (80.7%) | CORE |
| `personal_care_services` | 101/161 (62.7%) | CORE |
| `service_menu` | 101/161 (62.7%) | CORE |
| `entity_address_areas` | 78/161 (48.4%) | COMMON |
| `legacy_photo_migration_queue` | 28/161 (17.4%) | COMMON |
| `recovery_import_log` | 9/161 (5.6%) | PARTIAL |
| `entity_good_for` | 9/161 (5.6%) | PARTIAL |
| `entity_highlights` | 9/161 (5.6%) | PARTIAL |
| `entity_sources` | 9/161 (5.6%) | PARTIAL |
| `entity_conflicts` | 6/161 (3.7%) | PARTIAL |
| `entity_seo` | 6/161 (3.7%) | PARTIAL |
| `catalog_items` | 3/161 (1.9%) | PARTIAL |
| `catalog_section_days` | 3/161 (1.9%) | PARTIAL |
| `catalog_sections` | 3/161 (1.9%) | PARTIAL |
| `entity_offer_section` | 3/161 (1.9%) | PARTIAL |
| `menu_items` | 3/161 (1.9%) | PARTIAL |
| `menu_section_days` | 3/161 (1.9%) | PARTIAL |
| `menu_section_details` | 3/161 (1.9%) | PARTIAL |
| `menu_sections` | 3/161 (1.9%) | PARTIAL |
| `offerings` | 2/161 (1.2%) | PARTIAL |
| `ai_unified_search_items_full` | 2/161 (1.2%) | PARTIAL |
| `entity_secondary_hours` | 1/161 (0.6%) | PARTIAL |
| `tourist_seen` | 1/161 (0.6%) | PARTIAL |
| `tourist_swipe_events` | 1/161 (0.6%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## vacation_rental  (131 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 131/131 (100%) | CORE |
| `entity_completeness_v` | 131/131 (100%) | CORE |
| `industry_vacation_rental` | 131/131 (100%) | CORE |
| `search_index` | 131/131 (100%) | CORE |
| `v_industry_facts_slugs` | 131/131 (100%) | CORE |
| `entity_theme` | 117/131 (89.3%) | CORE |
| `entity_modules` | 105/131 (80.2%) | CORE |
| `entity_tags` | 66/131 (50.4%) | COMMON |
| `ai_data_completeness_audit_full` | 65/131 (49.6%) | COMMON |
| `ai_entity_intent_tags_full` | 65/131 (49.6%) | COMMON |
| `ai_entity_profiles_full` | 65/131 (49.6%) | COMMON |
| `entity_items_norm_v` | 61/131 (46.6%) | COMMON |
| `entity_items_v` | 61/131 (46.6%) | COMMON |
| `entity_offer` | 61/131 (46.6%) | COMMON |
| `bookable_resources` | 60/131 (45.8%) | COMMON |
| `bookable_resources_json_backup` | 60/131 (45.8%) | COMMON |
| `entity_photos` | 56/131 (42.7%) | COMMON |
| `ai_photo_index_full` | 54/131 (41.2%) | COMMON |
| `entity_google_maps_links` | 49/131 (37.4%) | COMMON |
| `entity_section_items` | 47/131 (35.9%) | COMMON |
| `entity_section_items_metadata_backup` | 47/131 (35.9%) | COMMON |
| `entity_sections` | 47/131 (35.9%) | COMMON |
| `rental_units` | 47/131 (35.9%) | COMMON |
| `entity_nearby_landmarks` | 45/131 (34.4%) | COMMON |
| `entity_google_reviews` | 38/131 (29%) | COMMON |
| `entity_reviews` | 38/131 (29%) | COMMON |
| `entity_attributes` | 37/131 (28.2%) | COMMON |
| `entity_nearby_landmark_types` | 36/131 (27.5%) | COMMON |
| `entity_hours` | 28/131 (21.4%) | COMMON |
| `recovery_import_log` | 23/131 (17.6%) | COMMON |
| `entity_address_areas` | 23/131 (17.6%) | COMMON |
| `legacy_photo_migration_queue` | 21/131 (16%) | COMMON |
| `entity_conflicts` | 17/131 (13%) | PARTIAL |
| `industry_hotel` | 13/131 (9.9%) | PARTIAL |
| `entity_good_for` | 4/131 (3.1%) | PARTIAL |
| `entity_highlights` | 4/131 (3.1%) | PARTIAL |
| `tourist_seen` | 4/131 (3.1%) | PARTIAL |
| `tourist_swipe_events` | 4/131 (3.1%) | PARTIAL |
| `entity_specials` | 2/131 (1.5%) | PARTIAL |
| `catalog_items` | 1/131 (0.8%) | PARTIAL |
| `catalog_section_days` | 1/131 (0.8%) | PARTIAL |
| `catalog_sections` | 1/131 (0.8%) | PARTIAL |
| `entity_offer_section` | 1/131 (0.8%) | PARTIAL |
| `menu_items` | 1/131 (0.8%) | PARTIAL |
| `menu_section_days` | 1/131 (0.8%) | PARTIAL |
| `menu_section_details` | 1/131 (0.8%) | PARTIAL |
| `menu_sections` | 1/131 (0.8%) | PARTIAL |
| `ai_event_planner_index_full` | 1/131 (0.8%) | PARTIAL |
| `ai_unified_search_items_full` | 1/131 (0.8%) | PARTIAL |
| `entity_events` | 1/131 (0.8%) | PARTIAL |
| `entity_seo` | 1/131 (0.8%) | PARTIAL |
| `entity_sources` | 1/131 (0.8%) | PARTIAL |
| `entity_secondary_hours` | 1/131 (0.8%) | PARTIAL |
| `entity_amenities` | 1/131 (0.8%) | PARTIAL |
| `entity_policies` | 1/131 (0.8%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `lodging_checkin_locations`, `lodging_common_areas`, `lodging_parking_transport`, `lodging_property_facilities`, `lodging_property_rules`, `lodging_waterfront_access`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## rental  (113 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 113/113 (100%) | CORE |
| `search_index` | 111/113 (98.2%) | CORE |
| `industry_rental` | 110/113 (97.3%) | CORE |
| `v_industry_facts_slugs` | 110/113 (97.3%) | CORE |
| `entity_completeness_v` | 109/113 (96.5%) | CORE |
| `entity_theme` | 104/113 (92%) | CORE |
| `entity_items_norm_v` | 91/113 (80.5%) | CORE |
| `entity_items_v` | 91/113 (80.5%) | CORE |
| `entity_offer` | 91/113 (80.5%) | CORE |
| `entity_tags` | 91/113 (80.5%) | CORE |
| `ai_data_completeness_audit_full` | 90/113 (79.6%) | CORE |
| `ai_entity_intent_tags_full` | 90/113 (79.6%) | CORE |
| `ai_entity_profiles_full` | 90/113 (79.6%) | CORE |
| `entity_modules` | 88/113 (77.9%) | CORE |
| `entity_photos` | 84/113 (74.3%) | CORE |
| `ai_photo_index_full` | 82/113 (72.6%) | CORE |
| `bookable_resources` | 64/113 (56.6%) | COMMON |
| `bookable_resources_json_backup` | 64/113 (56.6%) | COMMON |
| `entity_hours` | 53/113 (46.9%) | COMMON |
| `entity_sources` | 46/113 (40.7%) | COMMON |
| `entity_google_maps_links` | 41/113 (36.3%) | COMMON |
| `entity_nearby_landmark_types` | 41/113 (36.3%) | COMMON |
| `entity_nearby_landmarks` | 41/113 (36.3%) | COMMON |
| `entity_attributes` | 36/113 (31.9%) | COMMON |
| `entity_google_reviews` | 36/113 (31.9%) | COMMON |
| `entity_reviews` | 36/113 (31.9%) | COMMON |
| `offerings` | 35/113 (31%) | COMMON |
| `entity_highlights` | 35/113 (31%) | COMMON |
| `offering_prices` | 25/113 (22.1%) | COMMON |
| `requirements` | 23/113 (20.4%) | COMMON |
| `entity_address_areas` | 23/113 (20.4%) | COMMON |
| `meeting_points` | 22/113 (19.5%) | COMMON |
| `legacy_photo_migration_queue` | 21/113 (18.6%) | COMMON |
| `entity_offer_section` | 21/113 (18.6%) | COMMON |
| `pricing_items` | 18/113 (15.9%) | COMMON |
| `faqs` | 14/113 (12.4%) | PARTIAL |
| `entity_good_for` | 13/113 (11.5%) | PARTIAL |
| `tourist_seen` | 10/113 (8.8%) | PARTIAL |
| `tourist_swipe_events` | 10/113 (8.8%) | PARTIAL |
| `entity_conflicts` | 9/113 (8%) | PARTIAL |
| `entity_sections` | 9/113 (8%) | PARTIAL |
| `recovery_import_log` | 7/113 (6.2%) | PARTIAL |
| `entity_section_items` | 6/113 (5.3%) | PARTIAL |
| `entity_seo_keywords` | 6/113 (5.3%) | PARTIAL |
| `entity_seo` | 4/113 (3.5%) | PARTIAL |
| `whats_included` | 2/113 (1.8%) | PARTIAL |
| `entity_section_items_metadata_backup` | 2/113 (1.8%) | PARTIAL |
| `entity_secondary_hours` | 2/113 (1.8%) | PARTIAL |
| `tourist_saves` | 2/113 (1.8%) | PARTIAL |
| `whats_excluded` | 1/113 (0.9%) | PARTIAL |
| `entity_faqs` | 1/113 (0.9%) | PARTIAL |
| `entity_known_for` | 1/113 (0.9%) | PARTIAL |
| `entity_offer_deposit` | 1/113 (0.9%) | PARTIAL |
| `entity_refund_policy` | 1/113 (0.9%) | PARTIAL |
| `entity_section_item_features` | 1/113 (0.9%) | PARTIAL |
| `entity_policies` | 1/113 (0.9%) | PARTIAL |
| `offerings_details_backup` | 1/113 (0.9%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## cafe_dessert  (106 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 106/106 (100%) | CORE |
| `industry_cafe_dessert` | 106/106 (100%) | CORE |
| `search_index` | 106/106 (100%) | CORE |
| `v_industry_facts_slugs` | 106/106 (100%) | CORE |
| `entity_completeness_v` | 105/106 (99.1%) | CORE |
| `entity_theme` | 99/106 (93.4%) | CORE |
| `entity_photos` | 91/106 (85.8%) | CORE |
| `ai_data_completeness_audit_full` | 90/106 (84.9%) | CORE |
| `ai_entity_intent_tags_full` | 90/106 (84.9%) | CORE |
| `ai_entity_profiles_full` | 90/106 (84.9%) | CORE |
| `entity_modules` | 88/106 (83%) | CORE |
| `entity_tags` | 88/106 (83%) | CORE |
| `ai_photo_index_full` | 87/106 (82.1%) | CORE |
| `entity_google_maps_links` | 83/106 (78.3%) | CORE |
| `entity_attributes` | 82/106 (77.4%) | CORE |
| `entity_google_reviews` | 82/106 (77.4%) | CORE |
| `entity_nearby_landmark_types` | 82/106 (77.4%) | CORE |
| `entity_nearby_landmarks` | 82/106 (77.4%) | CORE |
| `entity_reviews` | 82/106 (77.4%) | CORE |
| `entity_hours` | 80/106 (75.5%) | CORE |
| `industry_food_beverage` | 70/106 (66%) | CORE |
| `entity_address_areas` | 52/106 (49.1%) | COMMON |
| `legacy_photo_migration_queue` | 50/106 (47.2%) | COMMON |
| `entity_offer_section` | 24/106 (22.6%) | COMMON |
| `entity_offer` | 23/106 (21.7%) | COMMON |
| `catalog_sections` | 21/106 (19.8%) | COMMON |
| `entity_items_norm_v` | 21/106 (19.8%) | COMMON |
| `entity_items_v` | 21/106 (19.8%) | COMMON |
| `menu_items` | 21/106 (19.8%) | COMMON |
| `menu_sections` | 21/106 (19.8%) | COMMON |
| `catalog_items` | 20/106 (18.9%) | COMMON |
| `catalog_section_days` | 20/106 (18.9%) | COMMON |
| `menu_section_days` | 20/106 (18.9%) | COMMON |
| `menu_section_details` | 20/106 (18.9%) | COMMON |
| `tourist_seen` | 16/106 (15.1%) | COMMON |
| `tourist_swipe_events` | 16/106 (15.1%) | COMMON |
| `entity_sources` | 15/106 (14.2%) | PARTIAL |
| `ai_unified_search_items_full` | 14/106 (13.2%) | PARTIAL |
| `recovery_import_log` | 14/106 (13.2%) | PARTIAL |
| `entity_secondary_hours` | 9/106 (8.5%) | PARTIAL |
| `entity_conflicts` | 9/106 (8.5%) | PARTIAL |
| `entity_good_for` | 7/106 (6.6%) | PARTIAL |
| `entity_highlights` | 7/106 (6.6%) | PARTIAL |
| `entity_seo` | 5/106 (4.7%) | PARTIAL |
| `tourist_saves` | 5/106 (4.7%) | PARTIAL |
| `happy_hour_sections` | 3/106 (2.8%) | PARTIAL |
| `dressings` | 1/106 (0.9%) | PARTIAL |
| `drink_item_option_groups` | 1/106 (0.9%) | PARTIAL |
| `drink_items` | 1/106 (0.9%) | PARTIAL |
| `drink_sections` | 1/106 (0.9%) | PARTIAL |
| `menu_item_option_groups` | 1/106 (0.9%) | PARTIAL |
| `menu_periods` | 1/106 (0.9%) | PARTIAL |
| `ai_event_planner_index_full` | 1/106 (0.9%) | PARTIAL |
| `entity_events` | 1/106 (0.9%) | PARTIAL |
| `happy_hour_items` | 1/106 (0.9%) | PARTIAL |
| `entity_gallery` | 1/106 (0.9%) | PARTIAL |
| `entity_sections` | 1/106 (0.9%) | PARTIAL |
| `bookable_resources` | 1/106 (0.9%) | PARTIAL |
| `bookable_resources_json_backup` | 1/106 (0.9%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## trade_home_service  (91 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 91/91 (100%) | CORE |
| `entity_completeness_v` | 91/91 (100%) | CORE |
| `entity_theme` | 91/91 (100%) | CORE |
| `industry_trade_home_service` | 91/91 (100%) | CORE |
| `search_index` | 91/91 (100%) | CORE |
| `v_industry_facts_slugs` | 91/91 (100%) | CORE |
| `entity_tags` | 88/91 (96.7%) | CORE |
| `ai_data_completeness_audit_full` | 87/91 (95.6%) | CORE |
| `ai_entity_intent_tags_full` | 87/91 (95.6%) | CORE |
| `ai_entity_profiles_full` | 87/91 (95.6%) | CORE |
| `entity_modules` | 87/91 (95.6%) | CORE |
| `entity_items_norm_v` | 86/91 (94.5%) | CORE |
| `entity_items_v` | 86/91 (94.5%) | CORE |
| `entity_offer` | 86/91 (94.5%) | CORE |
| `bookable_resources` | 85/91 (93.4%) | CORE |
| `bookable_resources_json_backup` | 85/91 (93.4%) | CORE |
| `ai_photo_index_full` | 79/91 (86.8%) | CORE |
| `entity_hours` | 79/91 (86.8%) | CORE |
| `entity_photos` | 78/91 (85.7%) | CORE |
| `entity_google_maps_links` | 77/91 (84.6%) | CORE |
| `entity_google_reviews` | 73/91 (80.2%) | CORE |
| `entity_reviews` | 73/91 (80.2%) | CORE |
| `entity_attributes` | 68/91 (74.7%) | CORE |
| `entity_nearby_landmarks` | 68/91 (74.7%) | CORE |
| `entity_nearby_landmark_types` | 67/91 (73.6%) | CORE |
| `service_menu` | 57/91 (62.6%) | CORE |
| `trade_home_services` | 57/91 (62.6%) | CORE |
| `entity_address_areas` | 21/91 (23.1%) | COMMON |
| `entity_sources` | 16/91 (17.6%) | COMMON |
| `entity_secondary_hours` | 10/91 (11%) | PARTIAL |
| `entity_seo` | 8/91 (8.8%) | PARTIAL |
| `entity_good_for` | 5/91 (5.5%) | PARTIAL |
| `entity_highlights` | 5/91 (5.5%) | PARTIAL |
| `recovery_import_log` | 5/91 (5.5%) | PARTIAL |
| `legacy_photo_migration_queue` | 4/91 (4.4%) | PARTIAL |
| `entity_conflicts` | 3/91 (3.3%) | PARTIAL |
| `entity_fuel_prices` | 1/91 (1.1%) | PARTIAL |
| `ai_event_planner_index_full` | 1/91 (1.1%) | PARTIAL |
| `ai_unified_search_items_full` | 1/91 (1.1%) | PARTIAL |
| `entity_events` | 1/91 (1.1%) | PARTIAL |
| `entity_faqs` | 1/91 (1.1%) | PARTIAL |
| `entity_offer_section` | 1/91 (1.1%) | PARTIAL |
| `entity_section_items` | 1/91 (1.1%) | PARTIAL |
| `entity_sections` | 1/91 (1.1%) | PARTIAL |
| `faqs` | 1/91 (1.1%) | PARTIAL |
| `offerings` | 1/91 (1.1%) | PARTIAL |
| `tourist_click_events` | 1/91 (1.1%) | PARTIAL |
| `transportation_providers` | 1/91 (1.1%) | PARTIAL |
| `users` | 1/91 (1.1%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## attraction  (87 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 87/87 (100%) | CORE |
| `industry_attraction` | 87/87 (100%) | CORE |
| `search_index` | 87/87 (100%) | CORE |
| `v_industry_facts_slugs` | 87/87 (100%) | CORE |
| `entity_completeness_v` | 85/87 (97.7%) | CORE |
| `entity_theme` | 85/87 (97.7%) | CORE |
| `entity_tags` | 80/87 (92%) | CORE |
| `ai_data_completeness_audit_full` | 73/87 (83.9%) | CORE |
| `ai_entity_intent_tags_full` | 73/87 (83.9%) | CORE |
| `ai_entity_profiles_full` | 73/87 (83.9%) | CORE |
| `entity_photos` | 66/87 (75.9%) | CORE |
| `ai_photo_index_full` | 61/87 (70.1%) | CORE |
| `entity_modules` | 61/87 (70.1%) | CORE |
| `entity_google_maps_links` | 57/87 (65.5%) | CORE |
| `entity_google_reviews` | 55/87 (63.2%) | CORE |
| `entity_reviews` | 55/87 (63.2%) | CORE |
| `entity_attributes` | 54/87 (62.1%) | CORE |
| `entity_nearby_landmarks` | 52/87 (59.8%) | COMMON |
| `entity_nearby_landmark_types` | 48/87 (55.2%) | COMMON |
| `entity_hours` | 46/87 (52.9%) | COMMON |
| `entity_address_areas` | 44/87 (50.6%) | COMMON |
| `entity_sources` | 25/87 (28.7%) | COMMON |
| `entity_offer` | 15/87 (17.2%) | COMMON |
| `entity_items_norm_v` | 13/87 (14.9%) | PARTIAL |
| `entity_items_v` | 13/87 (14.9%) | PARTIAL |
| `legacy_photo_migration_queue` | 10/87 (11.5%) | PARTIAL |
| `offerings` | 7/87 (8%) | PARTIAL |
| `entity_events` | 6/87 (6.9%) | PARTIAL |
| `entity_sections` | 6/87 (6.9%) | PARTIAL |
| `entity_seo_keywords` | 6/87 (6.9%) | PARTIAL |
| `tourist_seen` | 6/87 (6.9%) | PARTIAL |
| `tourist_swipe_events` | 6/87 (6.9%) | PARTIAL |
| `entity_highlights` | 6/87 (6.9%) | PARTIAL |
| `recovery_import_log` | 6/87 (6.9%) | PARTIAL |
| `entity_good_for` | 5/87 (5.7%) | PARTIAL |
| `ai_unified_search_items_full` | 3/87 (3.4%) | PARTIAL |
| `entity_section_items` | 3/87 (3.4%) | PARTIAL |
| `offering_prices` | 3/87 (3.4%) | PARTIAL |
| `bookable_resources` | 3/87 (3.4%) | PARTIAL |
| `bookable_resources_json_backup` | 3/87 (3.4%) | PARTIAL |
| `meeting_points` | 3/87 (3.4%) | PARTIAL |
| `requirements` | 3/87 (3.4%) | PARTIAL |
| `whats_included` | 3/87 (3.4%) | PARTIAL |
| `entity_conflicts` | 3/87 (3.4%) | PARTIAL |
| `catalog_items` | 2/87 (2.3%) | PARTIAL |
| `catalog_section_days` | 2/87 (2.3%) | PARTIAL |
| `catalog_sections` | 2/87 (2.3%) | PARTIAL |
| `entity_offer_section` | 2/87 (2.3%) | PARTIAL |
| `menu_items` | 2/87 (2.3%) | PARTIAL |
| `menu_section_days` | 2/87 (2.3%) | PARTIAL |
| `menu_section_details` | 2/87 (2.3%) | PARTIAL |
| `menu_sections` | 2/87 (2.3%) | PARTIAL |
| `entity_policies` | 2/87 (2.3%) | PARTIAL |
| `ai_event_planner_index_full` | 2/87 (2.3%) | PARTIAL |
| `entity_amenities` | 1/87 (1.1%) | PARTIAL |
| `tourist_saves` | 1/87 (1.1%) | PARTIAL |
| `entity_secondary_hours` | 1/87 (1.1%) | PARTIAL |
| `whats_excluded` | 1/87 (1.1%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `attractions`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## fitness_sports  (78 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 78/78 (100%) | CORE |
| `entity_theme` | 78/78 (100%) | CORE |
| `industry_fitness_sports` | 78/78 (100%) | CORE |
| `search_index` | 78/78 (100%) | CORE |
| `v_industry_facts_slugs` | 78/78 (100%) | CORE |
| `ai_data_completeness_audit_full` | 77/78 (98.7%) | CORE |
| `ai_entity_intent_tags_full` | 77/78 (98.7%) | CORE |
| `ai_entity_profiles_full` | 77/78 (98.7%) | CORE |
| `entity_tags` | 77/78 (98.7%) | CORE |
| `entity_completeness_v` | 76/78 (97.4%) | CORE |
| `entity_google_maps_links` | 76/78 (97.4%) | CORE |
| `entity_modules` | 76/78 (97.4%) | CORE |
| `entity_attributes` | 75/78 (96.2%) | CORE |
| `entity_nearby_landmarks` | 72/78 (92.3%) | CORE |
| `entity_nearby_landmark_types` | 71/78 (91%) | CORE |
| `entity_google_reviews` | 69/78 (88.5%) | CORE |
| `entity_reviews` | 69/78 (88.5%) | CORE |
| `ai_photo_index_full` | 67/78 (85.9%) | CORE |
| `entity_photos` | 67/78 (85.9%) | CORE |
| `entity_hours` | 55/78 (70.5%) | CORE |
| `entity_address_areas` | 40/78 (51.3%) | COMMON |
| `entity_items_norm_v` | 23/78 (29.5%) | COMMON |
| `entity_items_v` | 23/78 (29.5%) | COMMON |
| `entity_offer` | 23/78 (29.5%) | COMMON |
| `bookable_resources` | 20/78 (25.6%) | COMMON |
| `bookable_resources_json_backup` | 20/78 (25.6%) | COMMON |
| `entity_sources` | 17/78 (21.8%) | COMMON |
| `entity_seo` | 11/78 (14.1%) | PARTIAL |
| `legacy_photo_migration_queue` | 10/78 (12.8%) | PARTIAL |
| `tourist_seen` | 3/78 (3.8%) | PARTIAL |
| `tourist_swipe_events` | 3/78 (3.8%) | PARTIAL |
| `catalog_items` | 2/78 (2.6%) | PARTIAL |
| `catalog_section_days` | 2/78 (2.6%) | PARTIAL |
| `catalog_sections` | 2/78 (2.6%) | PARTIAL |
| `entity_offer_section` | 2/78 (2.6%) | PARTIAL |
| `menu_items` | 2/78 (2.6%) | PARTIAL |
| `menu_section_days` | 2/78 (2.6%) | PARTIAL |
| `menu_section_details` | 2/78 (2.6%) | PARTIAL |
| `menu_sections` | 2/78 (2.6%) | PARTIAL |
| `entity_secondary_hours` | 1/78 (1.3%) | PARTIAL |
| `entity_amenities` | 1/78 (1.3%) | PARTIAL |
| `entity_policies` | 1/78 (1.3%) | PARTIAL |
| `offering_prices` | 1/78 (1.3%) | PARTIAL |
| `offerings` | 1/78 (1.3%) | PARTIAL |
| `ai_unified_search_items_full` | 1/78 (1.3%) | PARTIAL |
| `entity_section_items` | 1/78 (1.3%) | PARTIAL |
| `entity_sections` | 1/78 (1.3%) | PARTIAL |
| `entity_seo_keywords` | 1/78 (1.3%) | PARTIAL |
| `entity_events` | 1/78 (1.3%) | PARTIAL |
| `recovery_import_log` | 1/78 (1.3%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `class_schedule`, `activity_details`, `activity_schedules`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## health_medical  (77 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 77/77 (100%) | CORE |
| `entity_completeness_v` | 77/77 (100%) | CORE |
| `industry_health_medical` | 77/77 (100%) | CORE |
| `search_index` | 77/77 (100%) | CORE |
| `v_industry_facts_slugs` | 77/77 (100%) | CORE |
| `entity_theme` | 76/77 (98.7%) | CORE |
| `entity_tags` | 63/77 (81.8%) | CORE |
| `ai_data_completeness_audit_full` | 60/77 (77.9%) | CORE |
| `ai_entity_intent_tags_full` | 60/77 (77.9%) | CORE |
| `ai_entity_profiles_full` | 60/77 (77.9%) | CORE |
| `entity_modules` | 60/77 (77.9%) | CORE |
| `entity_google_maps_links` | 56/77 (72.7%) | CORE |
| `entity_photos` | 56/77 (72.7%) | CORE |
| `ai_photo_index_full` | 55/77 (71.4%) | CORE |
| `entity_nearby_landmarks` | 55/77 (71.4%) | CORE |
| `bookable_resources` | 53/77 (68.8%) | CORE |
| `bookable_resources_json_backup` | 53/77 (68.8%) | CORE |
| `entity_attributes` | 53/77 (68.8%) | CORE |
| `entity_hours` | 53/77 (68.8%) | CORE |
| `entity_items_norm_v` | 53/77 (68.8%) | CORE |
| `entity_items_v` | 53/77 (68.8%) | CORE |
| `entity_nearby_landmark_types` | 53/77 (68.8%) | CORE |
| `entity_offer` | 53/77 (68.8%) | CORE |
| `entity_google_reviews` | 50/77 (64.9%) | CORE |
| `entity_reviews` | 50/77 (64.9%) | CORE |
| `health_medical_services` | 30/77 (39%) | COMMON |
| `service_menu` | 30/77 (39%) | COMMON |
| `entity_address_areas` | 22/77 (28.6%) | COMMON |
| `recovery_import_log` | 13/77 (16.9%) | COMMON |
| `entity_sources` | 10/77 (13%) | PARTIAL |
| `legacy_photo_migration_queue` | 4/77 (5.2%) | PARTIAL |
| `entity_seo` | 3/77 (3.9%) | PARTIAL |
| `entity_secondary_hours` | 1/77 (1.3%) | PARTIAL |
| `tourist_seen` | 1/77 (1.3%) | PARTIAL |
| `tourist_swipe_events` | 1/77 (1.3%) | PARTIAL |
| `entity_conflicts` | 1/77 (1.3%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## bar_nightlife  (74 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 74/74 (100%) | CORE |
| `industry_bar_nightlife` | 74/74 (100%) | CORE |
| `v_industry_facts_slugs` | 74/74 (100%) | CORE |
| `entity_completeness_v` | 73/74 (98.6%) | CORE |
| `search_index` | 73/74 (98.6%) | CORE |
| `entity_theme` | 72/74 (97.3%) | CORE |
| `ai_data_completeness_audit_full` | 56/74 (75.7%) | CORE |
| `ai_entity_intent_tags_full` | 56/74 (75.7%) | CORE |
| `ai_entity_profiles_full` | 56/74 (75.7%) | CORE |
| `entity_tags` | 56/74 (75.7%) | CORE |
| `ai_photo_index_full` | 55/74 (74.3%) | CORE |
| `entity_photos` | 55/74 (74.3%) | CORE |
| `entity_modules` | 53/74 (71.6%) | CORE |
| `entity_hours` | 51/74 (68.9%) | CORE |
| `entity_attributes` | 49/74 (66.2%) | CORE |
| `entity_google_maps_links` | 47/74 (63.5%) | CORE |
| `entity_nearby_landmark_types` | 47/74 (63.5%) | CORE |
| `entity_nearby_landmarks` | 47/74 (63.5%) | CORE |
| `entity_google_reviews` | 46/74 (62.2%) | CORE |
| `entity_reviews` | 46/74 (62.2%) | CORE |
| `industry_food_beverage` | 33/74 (44.6%) | COMMON |
| `entity_address_areas` | 31/74 (41.9%) | COMMON |
| `ai_unified_search_items_full` | 29/74 (39.2%) | COMMON |
| `entity_events` | 25/74 (33.8%) | COMMON |
| `recovery_import_log` | 22/74 (29.7%) | COMMON |
| `ai_event_planner_index_full` | 21/74 (28.4%) | COMMON |
| `catalog_sections` | 19/74 (25.7%) | COMMON |
| `catalog_section_days` | 18/74 (24.3%) | COMMON |
| `entity_items_norm_v` | 17/74 (23%) | COMMON |
| `entity_items_v` | 17/74 (23%) | COMMON |
| `entity_offer` | 16/74 (21.6%) | COMMON |
| `legacy_photo_migration_queue` | 16/74 (21.6%) | COMMON |
| `catalog_items` | 15/74 (20.3%) | COMMON |
| `entity_offer_section` | 14/74 (18.9%) | COMMON |
| `menu_items` | 13/74 (17.6%) | COMMON |
| `menu_section_days` | 13/74 (17.6%) | COMMON |
| `menu_section_details` | 13/74 (17.6%) | COMMON |
| `menu_sections` | 13/74 (17.6%) | COMMON |
| `entity_sources` | 11/74 (14.9%) | PARTIAL |
| `tourist_seen` | 10/74 (13.5%) | PARTIAL |
| `tourist_swipe_events` | 10/74 (13.5%) | PARTIAL |
| `entity_good_for` | 9/74 (12.2%) | PARTIAL |
| `entity_highlights` | 9/74 (12.2%) | PARTIAL |
| `happy_hour_sections` | 8/74 (10.8%) | PARTIAL |
| `entity_secondary_hours` | 8/74 (10.8%) | PARTIAL |
| `entity_conflicts` | 7/74 (9.5%) | PARTIAL |
| `entity_policies` | 3/74 (4.1%) | PARTIAL |
| `tourist_saves` | 3/74 (4.1%) | PARTIAL |
| `drink_items` | 3/74 (4.1%) | PARTIAL |
| `drink_sections` | 3/74 (4.1%) | PARTIAL |
| `happy_hour_items` | 3/74 (4.1%) | PARTIAL |
| `entity_sections` | 2/74 (2.7%) | PARTIAL |
| `entity_seo_keywords` | 2/74 (2.7%) | PARTIAL |
| `entity_seo` | 2/74 (2.7%) | PARTIAL |
| `menu_item_details` | 1/74 (1.4%) | PARTIAL |
| `entity_amenities` | 1/74 (1.4%) | PARTIAL |
| `bookable_resources` | 1/74 (1.4%) | PARTIAL |
| `bookable_resources_json_backup` | 1/74 (1.4%) | PARTIAL |
| `meeting_points` | 1/74 (1.4%) | PARTIAL |
| `offerings` | 1/74 (1.4%) | PARTIAL |
| `requirements` | 1/74 (1.4%) | PARTIAL |
| `whats_excluded` | 1/74 (1.4%) | PARTIAL |
| `whats_included` | 1/74 (1.4%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `beverage_servings`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## professional_service  (73 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 73/73 (100%) | CORE |
| `industry_professional_service` | 72/73 (98.6%) | CORE |
| `search_index` | 72/73 (98.6%) | CORE |
| `v_industry_facts_slugs` | 72/73 (98.6%) | CORE |
| `entity_theme` | 71/73 (97.3%) | CORE |
| `entity_completeness_v` | 65/73 (89%) | CORE |
| `entity_tags` | 61/73 (83.6%) | CORE |
| `entity_photos` | 51/73 (69.9%) | CORE |
| `ai_data_completeness_audit_full` | 46/73 (63%) | CORE |
| `ai_entity_intent_tags_full` | 46/73 (63%) | CORE |
| `ai_entity_profiles_full` | 46/73 (63%) | CORE |
| `entity_hours` | 37/73 (50.7%) | COMMON |
| `ai_photo_index_full` | 36/73 (49.3%) | COMMON |
| `bookable_resources` | 36/73 (49.3%) | COMMON |
| `bookable_resources_json_backup` | 36/73 (49.3%) | COMMON |
| `entity_items_norm_v` | 36/73 (49.3%) | COMMON |
| `entity_items_v` | 36/73 (49.3%) | COMMON |
| `entity_offer` | 36/73 (49.3%) | COMMON |
| `entity_modules` | 34/73 (46.6%) | COMMON |
| `professional_services` | 24/73 (32.9%) | COMMON |
| `service_menu` | 24/73 (32.9%) | COMMON |
| `entity_attributes` | 23/73 (31.5%) | COMMON |
| `entity_google_maps_links` | 23/73 (31.5%) | COMMON |
| `entity_nearby_landmark_types` | 23/73 (31.5%) | COMMON |
| `entity_nearby_landmarks` | 23/73 (31.5%) | COMMON |
| `entity_google_reviews` | 19/73 (26%) | COMMON |
| `entity_reviews` | 19/73 (26%) | COMMON |
| `entity_address_areas` | 14/73 (19.2%) | COMMON |
| `recovery_import_log` | 10/73 (13.7%) | PARTIAL |
| `entity_good_for` | 8/73 (11%) | PARTIAL |
| `entity_highlights` | 8/73 (11%) | PARTIAL |
| `entity_secondary_hours` | 4/73 (5.5%) | PARTIAL |
| `entity_conflicts` | 2/73 (2.7%) | PARTIAL |
| `entity_sources` | 1/73 (1.4%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## cruise_tour  (59 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 59/59 (100%) | CORE |
| `entity_completeness_v` | 59/59 (100%) | CORE |
| `entity_theme` | 59/59 (100%) | CORE |
| `industry_cruise_tour` | 59/59 (100%) | CORE |
| `search_index` | 59/59 (100%) | CORE |
| `v_industry_facts_slugs` | 59/59 (100%) | CORE |
| `entity_tags` | 55/59 (93.2%) | CORE |
| `entity_photos` | 50/59 (84.7%) | CORE |
| `entity_sources` | 49/59 (83.1%) | CORE |
| `entity_modules` | 41/59 (69.5%) | CORE |
| `ai_data_completeness_audit_full` | 40/59 (67.8%) | CORE |
| `ai_entity_intent_tags_full` | 40/59 (67.8%) | CORE |
| `ai_entity_profiles_full` | 40/59 (67.8%) | CORE |
| `ai_photo_index_full` | 40/59 (67.8%) | CORE |
| `entity_items_norm_v` | 40/59 (67.8%) | CORE |
| `entity_items_v` | 40/59 (67.8%) | CORE |
| `entity_offer` | 40/59 (67.8%) | CORE |
| `offerings` | 33/59 (55.9%) | COMMON |
| `activity_options` | 31/59 (52.5%) | COMMON |
| `entity_highlights` | 28/59 (47.5%) | COMMON |
| `offering_prices` | 26/59 (44.1%) | COMMON |
| `requirements` | 25/59 (42.4%) | COMMON |
| `pricing_items` | 23/59 (39%) | COMMON |
| `meeting_points` | 23/59 (39%) | COMMON |
| `entity_reviews` | 20/59 (33.9%) | COMMON |
| `entity_hours` | 18/59 (30.5%) | COMMON |
| `faqs` | 18/59 (30.5%) | COMMON |
| `entity_offer_section` | 18/59 (30.5%) | COMMON |
| `entity_attributes` | 16/59 (27.1%) | COMMON |
| `entity_google_maps_links` | 16/59 (27.1%) | COMMON |
| `entity_google_reviews` | 16/59 (27.1%) | COMMON |
| `entity_nearby_landmark_types` | 16/59 (27.1%) | COMMON |
| `entity_nearby_landmarks` | 16/59 (27.1%) | COMMON |
| `legacy_photo_migration_queue` | 16/59 (27.1%) | COMMON |
| `bookable_resources` | 11/59 (18.6%) | COMMON |
| `entity_address_areas` | 10/59 (16.9%) | COMMON |
| `entity_sections` | 9/59 (15.3%) | COMMON |
| `entity_seo_keywords` | 8/59 (13.6%) | PARTIAL |
| `whats_included` | 8/59 (13.6%) | PARTIAL |
| `vessels` | 7/59 (11.9%) | PARTIAL |
| `entity_section_items` | 6/59 (10.2%) | PARTIAL |
| `tourist_seen` | 5/59 (8.5%) | PARTIAL |
| `tourist_swipe_events` | 5/59 (8.5%) | PARTIAL |
| `whats_excluded` | 5/59 (8.5%) | PARTIAL |
| `entity_known_for` | 4/59 (6.8%) | PARTIAL |
| `bookable_resources_json_backup` | 4/59 (6.8%) | PARTIAL |
| `entity_faqs` | 3/59 (5.1%) | PARTIAL |
| `tourist_saves` | 2/59 (3.4%) | PARTIAL |
| `entity_policies` | 2/59 (3.4%) | PARTIAL |
| `ai_unified_search_items_full` | 2/59 (3.4%) | PARTIAL |
| `entity_conflicts` | 2/59 (3.4%) | PARTIAL |
| `fleet_items` | 1/59 (1.7%) | PARTIAL |
| `tourist_click_events` | 1/59 (1.7%) | PARTIAL |
| `vessel_features` | 1/59 (1.7%) | PARTIAL |
| `entity_amenities` | 1/59 (1.7%) | PARTIAL |
| `catalog_items` | 1/59 (1.7%) | PARTIAL |
| `catalog_section_days` | 1/59 (1.7%) | PARTIAL |
| `catalog_sections` | 1/59 (1.7%) | PARTIAL |
| `drink_items` | 1/59 (1.7%) | PARTIAL |
| `drink_sections` | 1/59 (1.7%) | PARTIAL |
| `entity_good_for` | 1/59 (1.7%) | PARTIAL |
| `entity_seo` | 1/59 (1.7%) | PARTIAL |
| `menu_items` | 1/59 (1.7%) | PARTIAL |
| `menu_section_days` | 1/59 (1.7%) | PARTIAL |
| `menu_section_details` | 1/59 (1.7%) | PARTIAL |
| `menu_sections` | 1/59 (1.7%) | PARTIAL |
| `entity_specials` | 1/59 (1.7%) | PARTIAL |
| `industry_rental` | 1/59 (1.7%) | PARTIAL |
| `charter_fishing_type` | 1/59 (1.7%) | PARTIAL |
| `recovery_import_log` | 1/59 (1.7%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `vessel_engines`, `vessel_facilities`, `vessel_safety_equipment`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## entertainment_venue  (54 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 54/54 (100%) | CORE |
| `entity_theme` | 54/54 (100%) | CORE |
| `industry_entertainment_venue` | 54/54 (100%) | CORE |
| `search_index` | 54/54 (100%) | CORE |
| `v_industry_facts_slugs` | 54/54 (100%) | CORE |
| `entity_completeness_v` | 52/54 (96.3%) | CORE |
| `entity_tags` | 45/54 (83.3%) | CORE |
| `ai_data_completeness_audit_full` | 43/54 (79.6%) | CORE |
| `ai_entity_intent_tags_full` | 43/54 (79.6%) | CORE |
| `ai_entity_profiles_full` | 43/54 (79.6%) | CORE |
| `entity_photos` | 39/54 (72.2%) | CORE |
| `ai_photo_index_full` | 37/54 (68.5%) | CORE |
| `entity_hours` | 36/54 (66.7%) | CORE |
| `entity_modules` | 36/54 (66.7%) | CORE |
| `entity_attributes` | 29/54 (53.7%) | COMMON |
| `entity_google_maps_links` | 29/54 (53.7%) | COMMON |
| `entity_google_reviews` | 28/54 (51.9%) | COMMON |
| `entity_nearby_landmark_types` | 28/54 (51.9%) | COMMON |
| `entity_nearby_landmarks` | 28/54 (51.9%) | COMMON |
| `entity_reviews` | 28/54 (51.9%) | COMMON |
| `entity_address_areas` | 19/54 (35.2%) | COMMON |
| `entity_items_norm_v` | 14/54 (25.9%) | COMMON |
| `entity_items_v` | 14/54 (25.9%) | COMMON |
| `entity_offer` | 14/54 (25.9%) | COMMON |
| `entity_sections` | 9/54 (16.7%) | COMMON |
| `entity_sources` | 9/54 (16.7%) | COMMON |
| `recovery_import_log` | 9/54 (16.7%) | COMMON |
| `bookable_resources` | 8/54 (14.8%) | PARTIAL |
| `bookable_resources_json_backup` | 8/54 (14.8%) | PARTIAL |
| `entity_good_for` | 7/54 (13%) | PARTIAL |
| `entity_highlights` | 7/54 (13%) | PARTIAL |
| `legacy_photo_migration_queue` | 7/54 (13%) | PARTIAL |
| `offering_prices` | 6/54 (11.1%) | PARTIAL |
| `offerings` | 6/54 (11.1%) | PARTIAL |
| `entity_section_items` | 5/54 (9.3%) | PARTIAL |
| `entity_seo_keywords` | 5/54 (9.3%) | PARTIAL |
| `entity_events` | 5/54 (9.3%) | PARTIAL |
| `ai_event_planner_index_full` | 4/54 (7.4%) | PARTIAL |
| `ai_unified_search_items_full` | 4/54 (7.4%) | PARTIAL |
| `tourist_seen` | 4/54 (7.4%) | PARTIAL |
| `tourist_swipe_events` | 4/54 (7.4%) | PARTIAL |
| `requirements` | 2/54 (3.7%) | PARTIAL |
| `offerings_details_backup` | 2/54 (3.7%) | PARTIAL |
| `entity_faqs` | 1/54 (1.9%) | PARTIAL |
| `entity_known_for` | 1/54 (1.9%) | PARTIAL |
| `faqs` | 1/54 (1.9%) | PARTIAL |
| `pricing_items` | 1/54 (1.9%) | PARTIAL |
| `entity_conflicts` | 1/54 (1.9%) | PARTIAL |
| `entity_seo` | 1/54 (1.9%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## property_management  (49 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 49/49 (100%) | CORE |
| `entity_completeness_v` | 49/49 (100%) | CORE |
| `entity_theme` | 49/49 (100%) | CORE |
| `industry_property_management` | 49/49 (100%) | CORE |
| `search_index` | 49/49 (100%) | CORE |
| `v_industry_facts_slugs` | 49/49 (100%) | CORE |
| `entity_modules` | 46/49 (93.9%) | CORE |
| `entity_photos` | 30/49 (61.2%) | CORE |
| `entity_tags` | 30/49 (61.2%) | CORE |
| `ai_data_completeness_audit_full` | 29/49 (59.2%) | COMMON |
| `ai_entity_intent_tags_full` | 29/49 (59.2%) | COMMON |
| `ai_entity_profiles_full` | 29/49 (59.2%) | COMMON |
| `bookable_resources` | 29/49 (59.2%) | COMMON |
| `bookable_resources_json_backup` | 29/49 (59.2%) | COMMON |
| `entity_items_norm_v` | 29/49 (59.2%) | COMMON |
| `entity_items_v` | 29/49 (59.2%) | COMMON |
| `entity_offer` | 29/49 (59.2%) | COMMON |
| `ai_photo_index_full` | 28/49 (57.1%) | COMMON |
| `entity_google_maps_links` | 26/49 (53.1%) | COMMON |
| `entity_google_reviews` | 26/49 (53.1%) | COMMON |
| `entity_reviews` | 26/49 (53.1%) | COMMON |
| `entity_attributes` | 25/49 (51%) | COMMON |
| `entity_hours` | 24/49 (49%) | COMMON |
| `entity_nearby_landmark_types` | 24/49 (49%) | COMMON |
| `entity_nearby_landmarks` | 24/49 (49%) | COMMON |
| `entity_address_areas` | 15/49 (30.6%) | COMMON |
| `legacy_photo_migration_queue` | 11/49 (22.4%) | COMMON |
| `entity_sources` | 4/49 (8.2%) | PARTIAL |
| `entity_good_for` | 3/49 (6.1%) | PARTIAL |
| `entity_highlights` | 3/49 (6.1%) | PARTIAL |
| `entity_amenities` | 2/49 (4.1%) | PARTIAL |
| `recovery_import_log` | 2/49 (4.1%) | PARTIAL |
| `entity_specials` | 1/49 (2%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## event_venue  (47 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 47/47 (100%) | CORE |
| `entity_completeness_v` | 47/47 (100%) | CORE |
| `entity_theme` | 47/47 (100%) | CORE |
| `industry_event_venue` | 47/47 (100%) | CORE |
| `search_index` | 47/47 (100%) | CORE |
| `v_industry_facts_slugs` | 47/47 (100%) | CORE |
| `recovery_import_log` | 24/47 (51.1%) | COMMON |
| `ai_data_completeness_audit_full` | 23/47 (48.9%) | COMMON |
| `ai_entity_intent_tags_full` | 23/47 (48.9%) | COMMON |
| `ai_entity_profiles_full` | 23/47 (48.9%) | COMMON |
| `entity_google_maps_links` | 23/47 (48.9%) | COMMON |
| `entity_modules` | 23/47 (48.9%) | COMMON |
| `entity_tags` | 23/47 (48.9%) | COMMON |
| `ai_photo_index_full` | 22/47 (46.8%) | COMMON |
| `entity_google_reviews` | 22/47 (46.8%) | COMMON |
| `entity_photos` | 22/47 (46.8%) | COMMON |
| `entity_reviews` | 22/47 (46.8%) | COMMON |
| `entity_attributes` | 21/47 (44.7%) | COMMON |
| `entity_nearby_landmark_types` | 21/47 (44.7%) | COMMON |
| `entity_nearby_landmarks` | 21/47 (44.7%) | COMMON |
| `entity_hours` | 14/47 (29.8%) | COMMON |
| `entity_address_areas` | 13/47 (27.7%) | COMMON |
| `legacy_photo_migration_queue` | 9/47 (19.1%) | COMMON |
| `entity_items_norm_v` | 6/47 (12.8%) | PARTIAL |
| `entity_items_v` | 6/47 (12.8%) | PARTIAL |
| `entity_offer` | 6/47 (12.8%) | PARTIAL |
| `bookable_resources` | 5/47 (10.6%) | PARTIAL |
| `bookable_resources_json_backup` | 5/47 (10.6%) | PARTIAL |
| `entity_seo` | 5/47 (10.6%) | PARTIAL |
| `tourist_seen` | 4/47 (8.5%) | PARTIAL |
| `tourist_swipe_events` | 4/47 (8.5%) | PARTIAL |
| `entity_sources` | 4/47 (8.5%) | PARTIAL |
| `catalog_items` | 2/47 (4.3%) | PARTIAL |
| `catalog_section_days` | 2/47 (4.3%) | PARTIAL |
| `catalog_sections` | 2/47 (4.3%) | PARTIAL |
| `entity_offer_section` | 2/47 (4.3%) | PARTIAL |
| `menu_items` | 2/47 (4.3%) | PARTIAL |
| `menu_section_days` | 2/47 (4.3%) | PARTIAL |
| `menu_section_details` | 2/47 (4.3%) | PARTIAL |
| `menu_sections` | 2/47 (4.3%) | PARTIAL |
| `ai_unified_search_items_full` | 1/47 (2.1%) | PARTIAL |
| `entity_good_for` | 1/47 (2.1%) | PARTIAL |
| `entity_highlights` | 1/47 (2.1%) | PARTIAL |
| `entity_events` | 1/47 (2.1%) | PARTIAL |
| `entity_secondary_hours` | 1/47 (2.1%) | PARTIAL |
| `entity_conflicts` | 1/47 (2.1%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## civic  (40 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 40/40 (100%) | CORE |
| `entity_theme` | 40/40 (100%) | CORE |
| `search_index` | 40/40 (100%) | CORE |
| `entity_completeness_v` | 39/40 (97.5%) | CORE |
| `industry_civic` | 39/40 (97.5%) | CORE |
| `v_industry_facts_slugs` | 39/40 (97.5%) | CORE |
| `entity_tags` | 30/40 (75%) | CORE |
| `entity_photos` | 28/40 (70%) | CORE |
| `ai_data_completeness_audit_full` | 27/40 (67.5%) | CORE |
| `ai_entity_intent_tags_full` | 27/40 (67.5%) | CORE |
| `ai_entity_profiles_full` | 27/40 (67.5%) | CORE |
| `ai_photo_index_full` | 26/40 (65%) | CORE |
| `bookable_resources` | 25/40 (62.5%) | CORE |
| `bookable_resources_json_backup` | 25/40 (62.5%) | CORE |
| `entity_attributes` | 25/40 (62.5%) | CORE |
| `entity_items_norm_v` | 25/40 (62.5%) | CORE |
| `entity_items_v` | 25/40 (62.5%) | CORE |
| `entity_offer` | 25/40 (62.5%) | CORE |
| `entity_google_maps_links` | 24/40 (60%) | CORE |
| `entity_google_reviews` | 24/40 (60%) | CORE |
| `entity_nearby_landmark_types` | 24/40 (60%) | CORE |
| `entity_nearby_landmarks` | 24/40 (60%) | CORE |
| `entity_reviews` | 24/40 (60%) | CORE |
| `entity_modules` | 18/40 (45%) | COMMON |
| `entity_hours` | 17/40 (42.5%) | COMMON |
| `entity_address_areas` | 16/40 (40%) | COMMON |
| `recovery_import_log` | 10/40 (25%) | COMMON |
| `entity_events` | 7/40 (17.5%) | COMMON |
| `ai_event_planner_index_full` | 6/40 (15%) | COMMON |
| `ai_unified_search_items_full` | 6/40 (15%) | COMMON |
| `legacy_photo_migration_queue` | 5/40 (12.5%) | PARTIAL |
| `entity_sources` | 2/40 (5%) | PARTIAL |
| `entity_good_for` | 1/40 (2.5%) | PARTIAL |
| `entity_highlights` | 1/40 (2.5%) | PARTIAL |
| `entity_secondary_hours` | 1/40 (2.5%) | PARTIAL |
| `entity_seo` | 1/40 (2.5%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `civic_contacts`, `civic_meetings`, `civic_services`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## marina  (38 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 38/38 (100%) | CORE |
| `entity_completeness_v` | 38/38 (100%) | CORE |
| `industry_marina` | 38/38 (100%) | CORE |
| `v_industry_facts_slugs` | 38/38 (100%) | CORE |
| `entity_tags` | 36/38 (94.7%) | CORE |
| `entity_theme` | 36/38 (94.7%) | CORE |
| `search_index` | 36/38 (94.7%) | CORE |
| `entity_attributes` | 35/38 (92.1%) | CORE |
| `ai_data_completeness_audit_full` | 34/38 (89.5%) | CORE |
| `ai_entity_intent_tags_full` | 34/38 (89.5%) | CORE |
| `ai_entity_profiles_full` | 34/38 (89.5%) | CORE |
| `entity_modules` | 34/38 (89.5%) | CORE |
| `ai_photo_index_full` | 33/38 (86.8%) | CORE |
| `entity_google_maps_links` | 33/38 (86.8%) | CORE |
| `entity_nearby_landmarks` | 33/38 (86.8%) | CORE |
| `entity_photos` | 33/38 (86.8%) | CORE |
| `entity_google_reviews` | 32/38 (84.2%) | CORE |
| `entity_nearby_landmark_types` | 32/38 (84.2%) | CORE |
| `entity_reviews` | 32/38 (84.2%) | CORE |
| `entity_hours` | 30/38 (78.9%) | CORE |
| `entity_address_areas` | 19/38 (50%) | COMMON |
| `legacy_photo_migration_queue` | 18/38 (47.4%) | COMMON |
| `entity_sources` | 14/38 (36.8%) | COMMON |
| `entity_items_norm_v` | 8/38 (21.1%) | COMMON |
| `entity_items_v` | 8/38 (21.1%) | COMMON |
| `entity_offer` | 7/38 (18.4%) | COMMON |
| `entity_sections` | 7/38 (18.4%) | COMMON |
| `marina_details` | 7/38 (18.4%) | COMMON |
| `marina_store_items` | 7/38 (18.4%) | COMMON |
| `entity_seo_keywords` | 5/38 (13.2%) | PARTIAL |
| `marina_bait_items` | 5/38 (13.2%) | PARTIAL |
| `bookable_resources` | 5/38 (13.2%) | PARTIAL |
| `offerings` | 4/38 (10.5%) | PARTIAL |
| `what_to_bring` | 4/38 (10.5%) | PARTIAL |
| `tourist_seen` | 4/38 (10.5%) | PARTIAL |
| `tourist_swipe_events` | 4/38 (10.5%) | PARTIAL |
| `entity_section_items` | 4/38 (10.5%) | PARTIAL |
| `bookable_resources_json_backup` | 4/38 (10.5%) | PARTIAL |
| `entity_amenities` | 4/38 (10.5%) | PARTIAL |
| `entity_conflicts` | 4/38 (10.5%) | PARTIAL |
| `charter_target_species` | 3/38 (7.9%) | PARTIAL |
| `fish_species` | 3/38 (7.9%) | PARTIAL |
| `fish_species_best_bait` | 3/38 (7.9%) | PARTIAL |
| `fish_species_fishing_method` | 3/38 (7.9%) | PARTIAL |
| `fish_species_peak_months` | 3/38 (7.9%) | PARTIAL |
| `offering_prices` | 3/38 (7.9%) | PARTIAL |
| `entity_highlights` | 3/38 (7.9%) | PARTIAL |
| `charter_trip_fish_species` | 2/38 (5.3%) | PARTIAL |
| `charter_trip_included` | 2/38 (5.3%) | PARTIAL |
| `charter_trip_what_to_bring` | 2/38 (5.3%) | PARTIAL |
| `charter_trips` | 2/38 (5.3%) | PARTIAL |
| `entity_offer_section` | 2/38 (5.3%) | PARTIAL |
| `pricing_items` | 2/38 (5.3%) | PARTIAL |
| `whats_included` | 2/38 (5.3%) | PARTIAL |
| `entity_policies` | 2/38 (5.3%) | PARTIAL |
| `entity_events` | 2/38 (5.3%) | PARTIAL |
| `entity_seo` | 2/38 (5.3%) | PARTIAL |
| `ai_facts` | 1/38 (2.6%) | PARTIAL |
| `charter_fishing_type` | 1/38 (2.6%) | PARTIAL |
| `offerings_details_backup` | 1/38 (2.6%) | PARTIAL |
| `entity_faqs` | 1/38 (2.6%) | PARTIAL |
| `entity_team_members` | 1/38 (2.6%) | PARTIAL |
| `faqs` | 1/38 (2.6%) | PARTIAL |
| `marina_slips` | 1/38 (2.6%) | PARTIAL |
| `requirements` | 1/38 (2.6%) | PARTIAL |
| `vessels` | 1/38 (2.6%) | PARTIAL |
| `watersport_equipment` | 1/38 (2.6%) | PARTIAL |
| `entity_known_for` | 1/38 (2.6%) | PARTIAL |
| `marina_contacts` | 1/38 (2.6%) | PARTIAL |
| `marina_products` | 1/38 (2.6%) | PARTIAL |
| `marina_profiles` | 1/38 (2.6%) | PARTIAL |
| `marina_seasonal_hours` | 1/38 (2.6%) | PARTIAL |
| `marina_vessels` | 1/38 (2.6%) | PARTIAL |
| `entity_good_for` | 1/38 (2.6%) | PARTIAL |
| `marina_bridge_clearances` | 1/38 (2.6%) | PARTIAL |
| `entity_secondary_hours` | 1/38 (2.6%) | PARTIAL |
| `marina_fuel_types` | 1/38 (2.6%) | PARTIAL |
| `recovery_import_log` | 1/38 (2.6%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `marina_bar_menu_sections`, `marina_booking_links`, `marina_business_faqs`, `marina_data_conflicts`, `marina_page_sections`, `marina_payment_methods`, `marina_promotions`, `marina_slip_units`, `marina_sources`, `marina_storage`, `marina_what_to_bring`, `slip_agreements`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## watersport  (33 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 33/33 (100%) | CORE |
| `entity_completeness_v` | 33/33 (100%) | CORE |
| `entity_theme` | 32/33 (97%) | CORE |
| `industry_watersport` | 32/33 (97%) | CORE |
| `search_index` | 32/33 (97%) | CORE |
| `v_industry_facts_slugs` | 32/33 (97%) | CORE |
| `entity_photos` | 30/33 (90.9%) | CORE |
| `ai_data_completeness_audit_full` | 29/33 (87.9%) | CORE |
| `ai_entity_intent_tags_full` | 29/33 (87.9%) | CORE |
| `ai_entity_profiles_full` | 29/33 (87.9%) | CORE |
| `ai_photo_index_full` | 29/33 (87.9%) | CORE |
| `entity_items_norm_v` | 29/33 (87.9%) | CORE |
| `entity_items_v` | 29/33 (87.9%) | CORE |
| `entity_modules` | 29/33 (87.9%) | CORE |
| `entity_offer` | 28/33 (84.8%) | CORE |
| `entity_tags` | 26/33 (78.8%) | CORE |
| `entity_sources` | 23/33 (69.7%) | CORE |
| `activity_options` | 20/33 (60.6%) | CORE |
| `offerings` | 20/33 (60.6%) | CORE |
| `entity_highlights` | 19/33 (57.6%) | COMMON |
| `requirements` | 18/33 (54.5%) | COMMON |
| `meeting_points` | 16/33 (48.5%) | COMMON |
| `offering_prices` | 15/33 (45.5%) | COMMON |
| `pricing_items` | 14/33 (42.4%) | COMMON |
| `entity_offer_section` | 14/33 (42.4%) | COMMON |
| `faqs` | 13/33 (39.4%) | COMMON |
| `bookable_resources` | 12/33 (36.4%) | COMMON |
| `bookable_resources_json_backup` | 12/33 (36.4%) | COMMON |
| `entity_hours` | 9/33 (27.3%) | COMMON |
| `entity_reviews` | 8/33 (24.2%) | COMMON |
| `entity_attributes` | 7/33 (21.2%) | COMMON |
| `entity_google_maps_links` | 7/33 (21.2%) | COMMON |
| `entity_google_reviews` | 7/33 (21.2%) | COMMON |
| `entity_nearby_landmark_types` | 7/33 (21.2%) | COMMON |
| `entity_nearby_landmarks` | 7/33 (21.2%) | COMMON |
| `legacy_photo_migration_queue` | 5/33 (15.2%) | COMMON |
| `entity_address_areas` | 4/33 (12.1%) | PARTIAL |
| `whats_included` | 4/33 (12.1%) | PARTIAL |
| `entity_sections` | 3/33 (9.1%) | PARTIAL |
| `entity_seo_keywords` | 3/33 (9.1%) | PARTIAL |
| `whats_excluded` | 2/33 (6.1%) | PARTIAL |
| `entity_good_for` | 2/33 (6.1%) | PARTIAL |
| `entity_conflicts` | 1/33 (3%) | PARTIAL |
| `vessels` | 1/33 (3%) | PARTIAL |
| `entity_policies` | 1/33 (3%) | PARTIAL |
| `ai_unified_search_items_full` | 1/33 (3%) | PARTIAL |
| `entity_faqs` | 1/33 (3%) | PARTIAL |
| `entity_known_for` | 1/33 (3%) | PARTIAL |
| `entity_seo` | 1/33 (3%) | PARTIAL |
| `entity_specials` | 1/33 (3%) | PARTIAL |
| `tourist_saves` | 1/33 (3%) | PARTIAL |
| `tourist_seen` | 1/33 (3%) | PARTIAL |
| `tourist_swipe_events` | 1/33 (3%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `vessel_engines`, `vessel_facilities`, `vessel_safety_equipment`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## parking  (31 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 31/31 (100%) | CORE |
| `industry_parking` | 31/31 (100%) | CORE |
| `search_index` | 31/31 (100%) | CORE |
| `v_industry_facts_slugs` | 31/31 (100%) | CORE |
| `entity_completeness_v` | 30/31 (96.8%) | CORE |
| `entity_theme` | 30/31 (96.8%) | CORE |
| `ai_data_completeness_audit_full` | 28/31 (90.3%) | CORE |
| `ai_entity_intent_tags_full` | 28/31 (90.3%) | CORE |
| `ai_entity_profiles_full` | 28/31 (90.3%) | CORE |
| `entity_tags` | 28/31 (90.3%) | CORE |
| `bookable_resources` | 25/31 (80.6%) | CORE |
| `bookable_resources_json_backup` | 25/31 (80.6%) | CORE |
| `entity_items_norm_v` | 25/31 (80.6%) | CORE |
| `entity_items_v` | 25/31 (80.6%) | CORE |
| `entity_offer` | 25/31 (80.6%) | CORE |
| `entity_attributes` | 23/31 (74.2%) | CORE |
| `entity_google_maps_links` | 23/31 (74.2%) | CORE |
| `entity_nearby_landmark_types` | 23/31 (74.2%) | CORE |
| `entity_nearby_landmarks` | 23/31 (74.2%) | CORE |
| `entity_photos` | 19/31 (61.3%) | CORE |
| `ai_photo_index_full` | 17/31 (54.8%) | COMMON |
| `entity_google_reviews` | 17/31 (54.8%) | COMMON |
| `entity_reviews` | 17/31 (54.8%) | COMMON |
| `entity_address_areas` | 15/31 (48.4%) | COMMON |
| `entity_modules` | 10/31 (32.3%) | COMMON |
| `entity_hours` | 6/31 (19.4%) | COMMON |
| `recovery_import_log` | 5/31 (16.1%) | COMMON |
| `entity_conflicts` | 2/31 (6.5%) | PARTIAL |
| `legacy_photo_migration_queue` | 1/31 (3.2%) | PARTIAL |
| `entity_events` | 1/31 (3.2%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `parking_lots`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## golf  (24 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `ai_data_completeness_audit_full` | 24/24 (100%) | CORE |
| `ai_entity_intent_tags_full` | 24/24 (100%) | CORE |
| `ai_entity_profiles_full` | 24/24 (100%) | CORE |
| `ai_photo_index_full` | 24/24 (100%) | CORE |
| `entity` | 24/24 (100%) | CORE |
| `entity_completeness_v` | 24/24 (100%) | CORE |
| `entity_hours` | 24/24 (100%) | CORE |
| `entity_photos` | 24/24 (100%) | CORE |
| `entity_tags` | 24/24 (100%) | CORE |
| `entity_theme` | 24/24 (100%) | CORE |
| `industry_golf` | 24/24 (100%) | CORE |
| `search_index` | 24/24 (100%) | CORE |
| `v_industry_facts_slugs` | 24/24 (100%) | CORE |
| `entity_modules` | 23/24 (95.8%) | CORE |
| `entity_google_maps_links` | 22/24 (91.7%) | CORE |
| `entity_google_reviews` | 22/24 (91.7%) | CORE |
| `entity_reviews` | 22/24 (91.7%) | CORE |
| `entity_attributes` | 21/24 (87.5%) | CORE |
| `entity_nearby_landmarks` | 20/24 (83.3%) | CORE |
| `entity_nearby_landmark_types` | 19/24 (79.2%) | CORE |
| `entity_sources` | 17/24 (70.8%) | CORE |
| `legacy_photo_migration_queue` | 13/24 (54.2%) | COMMON |
| `entity_offer` | 11/24 (45.8%) | COMMON |
| `entity_items_norm_v` | 10/24 (41.7%) | COMMON |
| `entity_items_v` | 10/24 (41.7%) | COMMON |
| `offerings` | 9/24 (37.5%) | COMMON |
| `offering_prices` | 8/24 (33.3%) | COMMON |
| `entity_address_areas` | 7/24 (29.2%) | COMMON |
| `entity_sections` | 5/24 (20.8%) | COMMON |
| `ai_unified_search_items_full` | 4/24 (16.7%) | COMMON |
| `catalog_items` | 4/24 (16.7%) | COMMON |
| `catalog_section_days` | 4/24 (16.7%) | COMMON |
| `catalog_sections` | 4/24 (16.7%) | COMMON |
| `entity_offer_section` | 4/24 (16.7%) | COMMON |
| `menu_items` | 4/24 (16.7%) | COMMON |
| `menu_section_days` | 4/24 (16.7%) | COMMON |
| `menu_section_details` | 4/24 (16.7%) | COMMON |
| `menu_sections` | 4/24 (16.7%) | COMMON |
| `entity_section_items` | 4/24 (16.7%) | COMMON |
| `entity_seo_keywords` | 4/24 (16.7%) | COMMON |
| `entity_events` | 2/24 (8.3%) | PARTIAL |
| `tourist_seen` | 2/24 (8.3%) | PARTIAL |
| `tourist_swipe_events` | 2/24 (8.3%) | PARTIAL |
| `entity_seo` | 2/24 (8.3%) | PARTIAL |
| `entity_secondary_hours` | 2/24 (8.3%) | PARTIAL |
| `ai_event_planner_index_full` | 1/24 (4.2%) | PARTIAL |
| `industry_food_beverage` | 1/24 (4.2%) | PARTIAL |
| `ai_data_quality_audit` | 1/24 (4.2%) | PARTIAL |
| `ai_data_quality_issues` | 1/24 (4.2%) | PARTIAL |
| `ai_drink_item_tag_values` | 1/24 (4.2%) | PARTIAL |
| `ai_drink_item_tags` | 1/24 (4.2%) | PARTIAL |
| `ai_menu_item_tag_values` | 1/24 (4.2%) | PARTIAL |
| `ai_menu_item_tags` | 1/24 (4.2%) | PARTIAL |
| `ai_planner_intent_tags` | 1/24 (4.2%) | PARTIAL |
| `ai_planner_profile_tags` | 1/24 (4.2%) | PARTIAL |
| `ai_planner_profiles` | 1/24 (4.2%) | PARTIAL |
| `ai_voice_snippets` | 1/24 (4.2%) | PARTIAL |
| `drink_items` | 1/24 (4.2%) | PARTIAL |
| `drink_sections` | 1/24 (4.2%) | PARTIAL |
| `pricing_items` | 1/24 (4.2%) | PARTIAL |
| `entity_amenities` | 1/24 (4.2%) | PARTIAL |
| `entity_policies` | 1/24 (4.2%) | PARTIAL |
| `entity_good_for` | 1/24 (4.2%) | PARTIAL |
| `entity_highlights` | 1/24 (4.2%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `golf_courses`, `golf_lessons`, `golf_memberships`, `golf_rentals`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## artist  (23 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 23/23 (100%) | CORE |
| `entity_completeness_v` | 23/23 (100%) | CORE |
| `industry_artist` | 23/23 (100%) | CORE |
| `search_index` | 23/23 (100%) | CORE |
| `v_industry_facts_slugs` | 23/23 (100%) | CORE |
| `entity_theme` | 22/23 (95.7%) | CORE |
| `ai_data_completeness_audit_full` | 21/23 (91.3%) | CORE |
| `ai_entity_intent_tags_full` | 21/23 (91.3%) | CORE |
| `ai_entity_profiles_full` | 21/23 (91.3%) | CORE |
| `entity_modules` | 21/23 (91.3%) | CORE |
| `entity_tags` | 21/23 (91.3%) | CORE |
| `ai_photo_index_full` | 20/23 (87%) | CORE |
| `entity_photos` | 20/23 (87%) | CORE |
| `entity_google_maps_links` | 18/23 (78.3%) | CORE |
| `entity_nearby_landmark_types` | 18/23 (78.3%) | CORE |
| `entity_nearby_landmarks` | 18/23 (78.3%) | CORE |
| `entity_attributes` | 17/23 (73.9%) | CORE |
| `entity_hours` | 16/23 (69.6%) | CORE |
| `entity_google_reviews` | 15/23 (65.2%) | CORE |
| `entity_reviews` | 15/23 (65.2%) | CORE |
| `entity_address_areas` | 9/23 (39.1%) | COMMON |
| `legacy_photo_migration_queue` | 7/23 (30.4%) | COMMON |
| `entity_sources` | 4/23 (17.4%) | COMMON |
| `entity_items_norm_v` | 3/23 (13%) | PARTIAL |
| `entity_items_v` | 3/23 (13%) | PARTIAL |
| `entity_offer` | 3/23 (13%) | PARTIAL |
| `entity_good_for` | 3/23 (13%) | PARTIAL |
| `entity_highlights` | 3/23 (13%) | PARTIAL |
| `entity_conflicts` | 2/23 (8.7%) | PARTIAL |
| `ai_event_planner_index_full` | 2/23 (8.7%) | PARTIAL |
| `ai_unified_search_items_full` | 2/23 (8.7%) | PARTIAL |
| `bookable_resources` | 2/23 (8.7%) | PARTIAL |
| `bookable_resources_json_backup` | 2/23 (8.7%) | PARTIAL |
| `entity_events` | 2/23 (8.7%) | PARTIAL |
| `recovery_import_log` | 2/23 (8.7%) | PARTIAL |
| `offering_prices` | 1/23 (4.3%) | PARTIAL |
| `offerings` | 1/23 (4.3%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `artist_booking_requests`, `artist_follows`, `artist_goals`, `artist_shows`, `song_requests`, `music_links`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## performing_arts  (20 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 20/20 (100%) | CORE |
| `entity_tags` | 20/20 (100%) | CORE |
| `entity_theme` | 20/20 (100%) | CORE |
| `industry_performing_arts` | 20/20 (100%) | CORE |
| `search_index` | 20/20 (100%) | CORE |
| `v_industry_facts_slugs` | 20/20 (100%) | CORE |
| `ai_data_completeness_audit_full` | 19/20 (95%) | CORE |
| `ai_entity_intent_tags_full` | 19/20 (95%) | CORE |
| `ai_entity_profiles_full` | 19/20 (95%) | CORE |
| `entity_completeness_v` | 19/20 (95%) | CORE |
| `entity_attributes` | 18/20 (90%) | CORE |
| `entity_google_maps_links` | 18/20 (90%) | CORE |
| `entity_modules` | 18/20 (90%) | CORE |
| `entity_photos` | 18/20 (90%) | CORE |
| `ai_photo_index_full` | 17/20 (85%) | CORE |
| `entity_google_reviews` | 17/20 (85%) | CORE |
| `entity_nearby_landmark_types` | 17/20 (85%) | CORE |
| `entity_nearby_landmarks` | 17/20 (85%) | CORE |
| `entity_reviews` | 17/20 (85%) | CORE |
| `entity_address_areas` | 12/20 (60%) | CORE |
| `entity_hours` | 7/20 (35%) | COMMON |
| `entity_events` | 4/20 (20%) | COMMON |
| `entity_sections` | 3/20 (15%) | COMMON |
| `entity_seo_keywords` | 3/20 (15%) | COMMON |
| `entity_sources` | 3/20 (15%) | COMMON |
| `legacy_photo_migration_queue` | 3/20 (15%) | COMMON |
| `entity_good_for` | 1/20 (5%) | PARTIAL |
| `entity_highlights` | 1/20 (5%) | PARTIAL |
| `entity_offer` | 1/20 (5%) | PARTIAL |
| `ai_event_planner_index_full` | 1/20 (5%) | PARTIAL |
| `ai_unified_search_items_full` | 1/20 (5%) | PARTIAL |
| `tourist_seen` | 1/20 (5%) | PARTIAL |
| `tourist_swipe_events` | 1/20 (5%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `performing_arts_shows`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## transportation  (17 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 17/17 (100%) | CORE |
| `entity_completeness_v` | 17/17 (100%) | CORE |
| `entity_tags` | 17/17 (100%) | CORE |
| `entity_theme` | 17/17 (100%) | CORE |
| `industry_transportation` | 17/17 (100%) | CORE |
| `search_index` | 17/17 (100%) | CORE |
| `v_industry_facts_slugs` | 17/17 (100%) | CORE |
| `ai_data_completeness_audit_full` | 16/17 (94.1%) | CORE |
| `ai_entity_intent_tags_full` | 16/17 (94.1%) | CORE |
| `ai_entity_profiles_full` | 16/17 (94.1%) | CORE |
| `bookable_resources` | 16/17 (94.1%) | CORE |
| `bookable_resources_json_backup` | 16/17 (94.1%) | CORE |
| `entity_google_maps_links` | 16/17 (94.1%) | CORE |
| `entity_google_reviews` | 16/17 (94.1%) | CORE |
| `entity_items_norm_v` | 16/17 (94.1%) | CORE |
| `entity_items_v` | 16/17 (94.1%) | CORE |
| `entity_modules` | 16/17 (94.1%) | CORE |
| `entity_offer` | 16/17 (94.1%) | CORE |
| `entity_reviews` | 16/17 (94.1%) | CORE |
| `entity_nearby_landmarks` | 14/17 (82.4%) | CORE |
| `ai_photo_index_full` | 13/17 (76.5%) | CORE |
| `entity_photos` | 13/17 (76.5%) | CORE |
| `entity_nearby_landmark_types` | 12/17 (70.6%) | CORE |
| `entity_hours` | 11/17 (64.7%) | CORE |
| `entity_attributes` | 10/17 (58.8%) | COMMON |
| `entity_address_areas` | 9/17 (52.9%) | COMMON |
| `entity_sources` | 5/17 (29.4%) | COMMON |
| `legacy_photo_migration_queue` | 2/17 (11.8%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `transportation_routes`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## photography  (13 businesses)

**In use now:**

| Table | Coverage | Class |
|---|---|---|
| `entity` | 13/13 (100%) | CORE |
| `entity_completeness_v` | 13/13 (100%) | CORE |
| `industry_photography` | 13/13 (100%) | CORE |
| `search_index` | 13/13 (100%) | CORE |
| `v_industry_facts_slugs` | 13/13 (100%) | CORE |
| `entity_theme` | 12/13 (92.3%) | CORE |
| `recovery_import_log` | 9/13 (69.2%) | CORE |
| `entity_photos` | 2/13 (15.4%) | COMMON |
| `entity_tags` | 2/13 (15.4%) | COMMON |
| `entity_attributes` | 1/13 (7.7%) | PARTIAL |
| `entity_conflicts` | 1/13 (7.7%) | PARTIAL |

**Built but empty — 0 rows for every business in this industry:**

*Industry-specific:* `photography_packages`

*Universal (booking/customer/loyalty/staff/commerce scaffolding — same gap across every industry):* `booking_calendar`, `bookings`, `entity_bookings`, `booking_opt_ins`, `booking_provider_map`, `entity_availability`, `business_availability`, `availability`, `resource_availability_slots`, `staff_availability`, `ical_availability_blocks`, `entity_external_calendars`, `entity_ical_feeds`, `hours_exceptions`, `waivers`, `customer_consents`, `customer_transactions`, `loyalty_members`, `loyalty_programs`, `reward_redemptions`, `orders`, `order_links`, `table_orders`, `table_sessions`, `payment_confirmations`, `marketplace_commissions`, `promos`, `gcr_deals`, `delivery_zones`, `fulfillment_settings`, `tip_links`, `business_staff`, `business_invites`, `item_reviews`, `review_invites`, `social_posts`, `entity_social_posts`, `shoutouts`, `announcements`, `entity_blog_posts`, `daily_features`, `entity_daily_features`, `page_rail_items`, `access_info`, `action_audit_log`, `entity_about_bullets`, `entity_credentials`, `entity_edit_log`, `entity_module_grants`, `entity_owners`, `entity_perfect_for`, `entity_photo_links`, `entity_warranty`, `email_parser_log`, `brands`, `product_categories`, `service_categories`, `service_addons`, `service_packages`, `service_portfolio_photos`, `service_area_zones`, `price_items`, `fees`, `property_fees`, `facilities`, `hub_details`, `seasonal_info`, `spot_details`, `spot_rules`, `weather_rules`, `quote_requests`, `utility_meter_readings`

---

## Empty tables not yet mapped to a specific industry

`shop_links`, `stay_links`, `tap_lines`, `tourist_group_saves`, `tourist_itineraries`, `tourist_photos`, `tourist_points`, `tripswipe_business_settings`, `tripswipe_sponsored`
