import { FaStar } from "react-icons/fa";

const Stars = ({
    rating,
}: {
    rating: number;
}) => {

    return (
        <div className="flex gap-2">
            {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                    key={i}
                    className={`sm:h-6 h-4 sm:w-6 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                />
            ))}
        </div>
    );
};

export default Stars;
