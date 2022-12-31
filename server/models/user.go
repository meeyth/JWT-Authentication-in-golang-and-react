package models

type User struct {
	Id       uint   `json:"id" gorm:"primaryKey"`
	Name     string `json:"name" gorm:"type:varchar(100)"`
	Email    string `json:"email" gorm:"unique"`
	Password []byte `json:"-"`
}
