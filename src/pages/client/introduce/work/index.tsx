import { useSelector } from "react-redux";
import IntroduceSection from "../../../../components/IntroduceSection";
import { getProfile } from "../../../../redux/selectors";

const Work: React.FC = () => {
    const profile = useSelector(getProfile)

    return (
        <div>
            <IntroduceSection
                title="Education"
                items={[
                    "THCS Quang Trung",
                    "THPT Nguyen Khuyen",
                    "TDT University",
                ]}
                addMore={profile.isOwner}
                editable={profile.isOwner}
                formRender={[
                    {
                        name: "name",
                        type: "education",
                        title:"School, university, college,...",
                        inputType: "text"
                    },
                    {
                        name: "year ",
                        type: "education",
                        title:"School, university, college,...",
                        inputType: "text"
                    }
                ]}
            />
            <IntroduceSection
                title="Works"
                items={["IMT Solutions"]}
                addMore={profile.isOwner}
                editable={profile.isOwner}
                formRender={[
                    {
                        name: "name",
                        type: "work",
                        title:"",
                        inputType: "text"
                    }
                ]}
            />
        </div>
    );
};

export default Work;
