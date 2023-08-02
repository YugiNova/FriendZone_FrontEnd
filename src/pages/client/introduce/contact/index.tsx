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
                        type: "phone",
                        title:"Phone number",
                        inputType: "textarea"
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
                        type: "email",
                        title:"Email",
                        inputType: "textarea"
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
                        type: "website",
                        title:"Website",
                        inputType: "textarea"
                    }
                ]}
            />
        </div>
    )
}

export default Contact