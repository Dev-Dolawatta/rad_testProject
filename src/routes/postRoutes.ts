import { Router } from "express";
import { Role } from "../models/userModels";
import { authenticate } from "../middleware/auth";
import { authorization } from "../middleware/authorizeRoles";
import { upload } from "../middleware/upload";
import { getAllPosts, savePost, getMyPost} from "../controllers/postController"
//import { paginate } from "../middleware/pagination";

const router = Router()

router.get("/", getAllPosts)  // public. so auth middleware - no need, but, pagination middleware needed

router.post("/create", authenticate, authorization(Role.ADMIN, Role.AUTHOR), upload.single("image"), savePost)   //signle or array dhanna puluvan. form-data key name "image" kiyl dagattha (kemethi namak daganna puluvan. ) 

router.get("/me", authenticate, authorization(Role.ADMIN, Role.AUTHOR), getMyPost)

export default router