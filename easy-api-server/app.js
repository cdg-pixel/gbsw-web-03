const express = require("express");
const app = express();
const PORT = 3000;

// 미들웨이 설정: HTTP 요청의 본문(body)에 있는 JSON 데이터를 피싱하기 위함
app.use(express.json());

// 임시 데이터베이스 (메모리 배열)
let users = [
    { id: 1, name: "구민준", email: "goo@example.com" },
    { id: 2, name: "김동우", email: "kim@example.com" },
];

app.listen(PORT, () => {
    console.log(`서버가 http://localshoet:%{PORT} 에서 실행 중 입니다.`);
});

// C 생성 - Create

// 유저 생성
app.post("/users", (req, res) => {
    const { name, email } = req.body;
    console.log(name);
    console.log(email);
    
    if (!name || !email) {
        // http 상태 코드
        return res
        .status(400)
        .json({ message: "이름과 이메일을 모두 입력해주세요." });
    }
    
    // 조건식 ? 값1 : 값2
    
    const newId = users[users.length - 1].id;
    const newUser = {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        name,
        email,
    };
    
    users.push(newUser);
    
    res.status(201).json({
        message: "사용자가 등록되었습니다.",
        user: newUser,
    });
});

// R 조회 - Read
// 1. 전체 유저 조회
app.get("/users", (req, res) => {
    res.status(200).json(users);
});

// 2. 특정 id를 가진 유저 조회
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find((user) => user.id === id);
    if (!user) {
        return res
            .status(404)
            .json({ message: `id가 ${id}인 사용자를 찾을 수 없습니다.`})
    }

    return res.status(200).json(user);
});

// U 수정 - Update
// put
// /users/:id
// email이나 name은 body에
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    // 찾지 못한 경우 -1
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex == -1) {
        return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    users[userIndex] = {
        id: users[userIndex].id,
        name: name || users[userIndex].name,
        email: email || users[userIndex].email,
    };

    res.status(200).json({
        message: "사용자 정보가 수정되었습니다.",
        user: users[userIndex],
    });
});

// HTTP mettod
// GET / POST / PUT / PATCH / DELETE
// D 삭제 - Delete
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex == -1) {
        return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    // splice(자르기 시작할 위치, 자를 개수)
    const deletedUser = users.splice(userIndex, 1);

    res.status(200).json({
        message: "사용자가 삭제되었습니다.",
        user: deletedUser[0],
    });
});