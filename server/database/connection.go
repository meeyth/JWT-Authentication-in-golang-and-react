package database

import (
	"jwt/models"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	dsn := "root:" + os.Getenv("DBPASS") + "@tcp(127.0.0.1:3306)/" + os.Getenv("DBNAME") + "?charset=utf8mb4&parseTime=True&loc=Local"

	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err)
	}

	DB = connection

	connection.AutoMigrate(&models.User{})
}
