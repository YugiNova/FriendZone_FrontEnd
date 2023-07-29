import { Route, Routes } from "react-router-dom";
import ClientLayout from "../../layouts/client";
import Newfeeds from "../../pages/client/newfeeds";
import Profile from "../../pages/client/profile.tsx";
import { Timeline } from "antd";
import Introduce from "../../pages/client/introduce";
import Overview from "../../pages/client/introduce/overview";
import Contact from "../../pages/client/introduce/contact";
import Place from "../../pages/client/introduce/place";
import Work from "../../pages/client/introduce/work";
import Event from "../../pages/client/introduce/event";

const ClientRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<ClientLayout />}>
                <Route index element={<Newfeeds />} />
                <Route path=":profile_id" element={<Profile />}>
                    <Route path="timeline" element={<Timeline />} />
                    <Route path="introduce" element={<Introduce />}>
                        <Route path="overview" element={<Overview />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="place" element={<Place />} />
                        <Route path="work_education" element={<Work />} />
                        <Route path="event" element={<Event />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
};

export default ClientRoute;
