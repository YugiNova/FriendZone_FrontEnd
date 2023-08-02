import { useSelector } from "react-redux";
import { Container } from "./styles";
import { getProfile, getTheme } from "../../../../redux/selectors";
import IntroduceSection from "../../../../components/IntroduceSection";

const Overview: React.FC = () => {
    const theme = useSelector(getTheme);
    const profile = useSelector(getProfile);

    return (
        <Container>
            <IntroduceSection
                title="About"
                deletable={false}
                profileStatus={false}
                items={[profile.data.profile?.introduce || ""]}
                addMore={false}
                editable={profile.isOwner}
                formRender={[
                    {
                        name: "introduce",
                        type: "profile",
                        title:"Introduce",
                        inputType: "textarea"
                    },
                ]}
            />
            <IntroduceSection
                title="Birthday"
                deletable={false}
                profileStatus={false}
                items={["13/12/1999"]}
                addMore={false}
                editable={profile.isOwner}
                formRender={[
                    {
                        name: "dob",
                        type: "profile",
                        title:"Birthday",
                        inputType: "date"
                    }
                ]}
            />
            <IntroduceSection
                title="Gender"
                deletable={false}
                profileStatus={false}
                items={["Male"]}
                addMore={false}
                editable={false}
                formRender={[
                    
                ]}
            />
        </Container>
    );
};

export default Overview;
