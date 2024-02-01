import { Route, Routes } from 'react-router-dom'
import Books from './Books'
import EditBook from './EditBook'
import SingleBook from './SingleBook'
import UserRegisterForm from './UserRegisterForm'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books/:id" element={<SingleBook />} />
            <Route path="/books/:id/edit" element={<EditBook />} />
            <Route path="/login" element={<UserRegisterForm />} />
            <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    )
}

export default MainRoutes