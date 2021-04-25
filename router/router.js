const express = require('express');
const router = express.Router();
const Book = require('../models/book')

//找出所有資料
router.get('/', async (req, res) => {
    console.log("This is get from (posts/) Action:Find all data");
    try {
        let findAll = await Book.find();
        res.json(findAll);
    } catch (err) {
        res.json({
            'message': err
        });
    }
});

//找出資料by id
router.get('/:id', async (req, res) => {
    console.log("This is get from (posts/) Action:Find a data by id");
    try {
        let findById = await Book.find({"_id":req.params.id});
        res.json(findById);
    } catch (err) {
        res.json({
            'message': err
        });
    }
});

//初始化並增加資料
router.post('/addBook', async (req, res) => {
    console.log("This is post from (posts/addBook) Action:Add data");
    let title = req.body.title + new Date().getSeconds();
    let book = new Book({
        title: title,
        description: req.body.description,
        price: req.body.price,
    });
    try {
        let addBook = await book.save();
        res.json(addBook);
    } catch (err) {
        res.json({
            'message': err
        });
    }

});

//更新原有資料的屬性 （不是全部更新，是針對指定的資料屬性做更新）
router.patch('/updateOne/:id', async (req, res) => {
    console.log("This is get from (posts/) Action:Update a data by id");
    try {
        let updateById = await Book.updateOne({"_id":req.params.id},{"description":"更新原有資料的屬性"});
        res.json(updateById);
    } catch (err) {
        res.json({
            'message': err
        });
    }
});

// 刪除資料 by ID
router.delete('/delete/:id', async (req, res) => {
    console.log("This is post from (posts/delete) Action:Delete data");
    console.log("Request remove _id = ",req.params.id)
    try{
        let deleteData = await Book.remove({"_id":req.params.id});
        res.json(deleteData);
    }catch(err){
        res.json({
            'message': err
        });
    };
    
});

module.exports = router;