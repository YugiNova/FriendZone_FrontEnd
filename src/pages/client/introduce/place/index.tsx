import IntroduceSection from "../../../../components/IntroduceSection";

const Place: React.FC = () => {
    return (
        <div>
            <IntroduceSection
                title="Current"
                addMore={false}
                items={["Tân Bình, Hồ Chí Minh, Việt Nam"]}
            />

            <IntroduceSection
                title="Hometown"
                addMore={false}
                items={["Bến Lức, Long An"]}
            />
        </div>
    );
};

export default Place;
