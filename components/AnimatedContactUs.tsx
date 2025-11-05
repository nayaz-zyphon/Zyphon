
const AnimatedContactUs = () => {
    return (
        <div className="overflow-hidden z-0 py-10">
            <TextMoving
                bgColor="#EF644C"
                textColor="#000000"
                rotateAngle={"rotate-1"}
                translateY={"translate-y-1/4"}
                animateClass="animate-to-left"
            />

            <TextMoving
                bgColor="#FFFFFF"
                textColor="#000000"
                rotateAngle={"-rotate-1"}
                translateY={"-translate-y-1/4"}
                animateClass="animate-to-right"
            />
        </div>
    )
};

const TextMoving = ({ bgColor, textColor, rotateAngle, translateY, animateClass }: { bgColor: string; textColor: string; rotateAngle: string; translateY: string; animateClass: string }) => {
    return (
        <div
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
            className={"font-['Space_Grotesk'] lg:text-5xl md:text-4xl sm:text-3xl text-base font-medium flex sm:gap-16 gap-4 sm:py-6 py-4 overflow-x-visible select-none " + `${translateY} ${rotateAngle} ${animateClass}`}
        >
            <div className="flex sm:gap-16 gap-8">
                <p>
                    Need a Quick Fix? Contact Us
                </p>
                <p>
                    +91 - 91480 78233
                </p>
            </div>
            <div className="flex sm:gap-16 gap-8">
                <p>
                    Need a Quick Fix? Contact Us
                </p>
                <p>
                    +91 - 91480 78233
                </p>
            </div>
            <div className="flex sm:gap-16 gap-8">
                <p>
                    Need a Quick Fix? Contact Us
                </p>
                <p>
                    +91 - 91480 78233
                </p>
            </div>
        </div>
    )
}

export default AnimatedContactUs