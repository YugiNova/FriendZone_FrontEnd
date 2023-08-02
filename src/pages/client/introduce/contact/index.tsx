import { useSelector } from "react-redux"
import IntroduceSection from "../../../../components/IntroduceSection"
import { getProfile } from "../../../../redux/selectors"


const Contact:React.FC = () => {
    const profile = useSelector(getProfile)

    return(
        <div>
            <IntroduceSection
                title="Phone Number"
                items={["0902647540"]}
                addMore={profile.isOwner} editable={profile.isOwner}
                formRender={[
                    {
                        name: "content",
                        type: "contact",
                        title:"Phone number",
                        inputType: "text"
                    },
                    {
                        name: "type",
                        type: "contact",
                        title:"phone",
                        inputType: "text"
                    }
                ]}
            />
            <IntroduceSection
                title="Email"
                items={["yuginovaniac@gmail.com"]}
                addMore={profile.isOwner} editable={profile.isOwner}
                formRender={[
                    {
                        name: "content",
                        type: "contact",
                        title:"Email",
                        inputType: "text"
                    },
                    {
                        name: "type",
                        type: "contact",
                        title:"email",
                        inputType: "text"
                    }
                ]}
            />
            <IntroduceSection
                title="Website"
                items={["https://yuginova.github.io/Portfolio/"]}
                addMore={profile.isOwner} editable={profile.isOwner}
                formRender={[
                    {
                        name: "content",
                        type: "contact",
                        title:"Website",
                        inputType: "text"
                    },
                    {
                        name: "type",
                        type: "contact",
                        title:"wensite",
                        inputType: "text"
                    }
                ]}
            />
        </div>
    )
}

export default Contact