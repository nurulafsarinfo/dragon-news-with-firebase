import { FaRegEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";

import { format } from "date-fns";

const NewsCard = ({ news }) => {
    const {
        title,
        details,
        image_url,
        author,
        total_view,
        rating,
        published_date = author?.published_date,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md ">
            <div className="flex items-center justify-between px-4 pt-4 bg-base-200 rounded-t-xl">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={author?.img} alt={author?.name} />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold text-sm">{author?.name}</h2>
                        <p className="text-xs text-gray-500">{format(new Date(published_date), "yyyy-MM-dd")}</p>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-primary flex gap-2">
                    <FaRegBookmark size={24}/>
                    <FaShareAlt size={24}/>
                </button>
            </div>

            <div className="card-body pt-2">
                <h2 className="card-title text-base font-bold">
                    {title}
                </h2>
                <figure className="py-3">
                    <img src={image_url} alt="news" className="rounded-md" />
                </figure>
                <p className="text-sm text-gray-700">
                    {details.length > 200 ? `${details.slice(0, 200)}...` : details}
                    {details.length > 200 && (
                        <span className="text-primary font-medium cursor-pointer"> Read More</span>
                    )}
                </p>
            </div>

            <div className="flex justify-between items-center px-4 pb-4">
                <div className="flex items-center text-warning gap-1">
                    {Array.from({ length: rating.number }).map((_, idx) => (
                        <FaStar key={idx} />
                    ))}
                    <span className="text-sm text-black ml-2">{rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <FaRegEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
