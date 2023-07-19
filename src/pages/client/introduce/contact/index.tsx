import IntroduceSection from "../../../../components/IntroduceSection"


const Contact:React.FC = () => {
    return(
        <div>
            <IntroduceSection
                title="Phone Number"
                items={["0902647540"]}
            />
            <IntroduceSection
                title="Email"
                items={["yuginovaniac@gmail.com"]}
            />
            <IntroduceSection
                title="Website"
                items={["https://yuginova.github.io/Portfolio/"]}
            />
        </div>
    )
}

export default Contact