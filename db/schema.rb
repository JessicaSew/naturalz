# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_09_211849) do

  create_table "hairstyle_users", force: :cascade do |t|
    t.integer "hairstyle_id", null: false
    t.integer "user_id", null: false
    t.text "comments"
    t.integer "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["hairstyle_id"], name: "index_hairstyle_users_on_hairstyle_id"
    t.index ["user_id"], name: "index_hairstyle_users_on_user_id"
  end

  create_table "hairstyles", force: :cascade do |t|
    t.string "title"
    t.text "instructions"
    t.integer "minutes_to_complete"
    t.integer "creator_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["creator_id"], name: "index_hairstyles_on_creator_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "image_url"
    t.string "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "hairstyle_users", "hairstyles"
  add_foreign_key "hairstyle_users", "users"
  add_foreign_key "hairstyles", "users", column: "creator_id"
end
