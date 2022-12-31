package main

import (
	db "jwt/database"
	router "jwt/routes"
	"log"

	"github.com/joho/godotenv"
)

func main() {

	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	db.Connect()

	router.Run()
}
