import IntroduceSection from "../../../../components/IntroduceSection"


const Work:React.FC = () => {
    return(
        <div>
            <IntroduceSection title="Education" items={["THCS Quang Trung","THPT Nguyen Khuyen","TDT University"]}/>
            <IntroduceSection title="Works" items={["IMT Solutions"]}/>
            
        </div>
    )
}

export default Work