package routes

import (
	"jwt/controllers"

	"github.com/gofiber/fiber/v2"
)

func auth(app fiber.Router) {
	app.Post("/register", controllers.Register)
	app.Post("/login", controllers.Login)
	app.Get("/user", controllers.User)
	app.Post("/logout", controllers.Logout)
}
