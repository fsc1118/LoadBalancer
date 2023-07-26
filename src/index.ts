import express from "express"
import { Request } from "express"
import { Response } from "express"

const app = express()
const port = 8080

app.get("*", (req: Request, res: Response) => {
    res.redirect("https://shichfan.people.aws.dev")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})