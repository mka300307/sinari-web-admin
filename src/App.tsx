import {Route, Routes} from "react-router-dom";
import DashboardPage from "@/Pages/Dashboard/presentation/pages/DashboardPage.tsx";
import PasienPage from "@/Pages/Pasien/presentation/pages/PasienPage.tsx";
import DetailPasienPage from "@/Pages/Dashboard/presentation/pages/DetailPage.tsx";
import EditPasienPage from "@/Pages/Dashboard/presentation/pages/EditPAge.tsx";
import AddPasienPage from "@/Pages/Dashboard/presentation/pages/AddPage.tsx";
import FormPage from "@/Pages/Forms/persentation/pages/FormPage.tsx";
import AddFormPage from "@/Pages/Forms/persentation/pages/AddForm.tsx";
import KlusterPage from "@/Pages/Kluster/persentation/pages/KlusterPage.tsx";
import EditKlsuterPage from "@/Pages/Kluster/persentation/pages/EditKluster.tsx";
import AddKlusterPage from "@/Pages/Kluster/persentation/pages/AddKluster.tsx";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<DashboardPage/>}
            />
            <Route
                path="/pasien"
                element={<PasienPage/>}
            />
            <Route
                path="/pasien/detail/:id"
                element={<DetailPasienPage/>}
            />
            <Route
                path="/pasien/edit/:id"
                element={<EditPasienPage/>}
            />
            <Route
                path="/pasien/add"
                element={<AddPasienPage/>}
            />
            <Route
                path="/skrining"
                element={<FormPage/>}
            />
            <Route
                path="/skrining/add"
                element={<AddFormPage/>}
            />
            <Route
                path="/kluster"
                element={<KlusterPage/>}
            />
            <Route
                path="/kluster/edit/:id"
                element={<EditKlsuterPage/>}
            />
            <Route
                path="/kluster/add"
                element={<AddKlusterPage/>}
            />
        </Routes>
    )
}

export default App
