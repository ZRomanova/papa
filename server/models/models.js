const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING(100), allowNull: false},
    role: {type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: []}
})

const Profile = sequelize.define('profile', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING(100), allowNull: false},
    about: {type: DataTypes.STRING(2000)}
    //profile fields
})

User.hasOne(Profile)
Profile.belongsTo(User)

const UserTag = sequelize.define('userTag', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(70), allowNull: false}
})

const UserTagLevel = sequelize.define('userTagScore', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    score: {type: DataTypes.INTEGER, allowNull: false}
})

const UserReview = sequelize.define('userReview', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING(2000)}
})

const Trip = sequelize.define('trip', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    //
})

UserTag.hasMany(UserTagLevel);
UserTagLevel.belongsTo(UserTag);

UserReview.hasMany(UserTagLevel);
UserTagLevel.belongsTo(UserReview);

Trip.hasMany(UserReview)
UserReview.belongsTo(Trip)

Profile.hasMany(UserReview, {foreignKey: 'authorId'})
Profile.hasMany(UserReview, {foreignKey: 'describedId'})


