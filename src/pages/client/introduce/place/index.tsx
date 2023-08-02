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
                        type: "current",
                        title:"Where are you living",
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
                        type: "hometown",
                        title:"Your home town",
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
                        type: "other",
                        title:"Other place you use to lived",
                        inputType: "text"
                    }
                ]}
            />
        </div>
    );
};

export default Place;
