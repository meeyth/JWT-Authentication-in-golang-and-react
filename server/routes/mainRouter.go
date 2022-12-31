package routes

import (
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func Run() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	app.Route("/auth", auth)

	log.Fatal(app.Listen(fmt.Sprintf("localhost:%s", os.Getenv("PORT"))))
}
