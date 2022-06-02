User.destroy_all
Hairstyle.destroy_all

User.create(username: "jess123", password:"flatiron", image_url: "Blank", bio: "Hi my name is Jess and here are some hairstyles you should try")
User.create(username: "dawn456", password:"dawn")

Hairstyle.create(title: "Curl Formers", instructions: "If a roller-like corkscrew curl is more your style, you can achieve this with a set of Curlformers ($23). You know, those curled pieces of fabric that took the natural hair community by storm a few years ago? With Curlformers, you loop your dampened and product-loaded hair through the fabric (which can take anywhere between a few minutes to an hour depending on your hair’s length, thickness and desired section size). You’ll need to wait until your hair is dry to see the final result, but it’s still a super easy process to do overall.", minutes_to_complete: 30, creator_id: User.all.sample.id)
Hairstyle.create(title: "Faux Hawk", instructions: "If you like to stand tall with an edgy do, you can always try a voluminous faux-hawk. Throw your hair up and towards the front, and use either hair pins or ties to capture that mohawk essence. It’ll only cost you a few minutes.", minutes_to_complete: 45, creator_id: User.all.sample.id)

HairstyleUser.create(user_id: 1, hairstyle_id: 1, rating: 2)
HairstyleUser.create(user_id: 2, hairstyle_id: 2, rating: 3)