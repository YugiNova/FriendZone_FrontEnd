import { useSelector } from "react-redux";
import IntroduceSection from "../../../../components/IntroduceSection";
import { getProfile } from "../../../../redux/selectors";

const Place: React.FC = () => {
    const profile = useSelector(getProfile)

    return (
        <div>
            <IntroduceSection
                title="Current"
                addMore={profile.isOwner} editable={profile.isOwner}
                items={["Tân Bình, Hồ Chí Minh, Việt Nam"]}
                formRender={[
                    {
                        name: "name",
                        type: "place",
                        title:"Place you are living",
                        inputType: "text"
                    },
                    {
                        name: "type",
                        type: "place",
                        title:"current",
                        inputType: "text"
                    }
                ]}
            />

            <IntroduceSection
                title="Hometown"
                addMore={profile.isOwner} editable={profile.isOwner}
                items={["Bến Lức, Long An"]}
                formRender={[
                    {
                        name: "name",
                        type: "place",
                        title:"Your hometown",
                        inputType: "text"
                    },
                    {
                        name: "type",
                        type: "place",
                        title:"hometown",
                        inputType: "text"
                    }
                ]}
            />

            <IntroduceSection
                title="Use to lived"
                addMore={profile.isOwner} editable={profile.isOwner}
                items={["Bến Lức, Long An"]}
                formRender={[
                    {
                        name: "name",
                        type: "place",
                        title:"Place you are living",
                        inputType: "text"
                    },
                    {
                        name: "type",
                        type: "place",
                        title:"current",
                        inputType: "text"
                    }
                ]}
            />
        </div>
    );
};

export default Place;
