import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ThumbsUpIcon from "../../assets/images/thumbs-up.png";

const RatingDialog = ({
  isDialogOpen,
  handleDialogClose,
  handleRating,
  rating,
  isRated,
}) => (
  <AlertDialog open={isDialogOpen} onOpenChange={handleDialogClose}>
    <AlertDialogContent className="w-full max-w-md p-6 -mt-20">
      <AlertDialogHeader>
        <div className="flex flex-col items-center">
          <img src={ThumbsUpIcon} alt="Thumbs Up" className="w-24 h-24 mb-4" />
          <AlertDialogTitle>
            {isRated ? "Thank you for your rating" : "Rate this service"}
          </AlertDialogTitle>
        </div>
      </AlertDialogHeader>
      {!isRated && (
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} onClick={() => handleRating(star)}>
                {star <= rating ? (
                  <AiFillStar className="cursor-pointer text-2xl text-yellow-500" />
                ) : (
                  <AiOutlineStar className="cursor-pointer text-2xl text-gray-300" />
                )}
              </span>
            ))}
          </div>
        </div>
      )}
      <AlertDialogFooter>
        {isRated && (
          <button
            className="px-4 py-2 bg-green-800 text-white rounded-full cursor-pointer"
            onClick={handleDialogClose}
          >
            Close
          </button>
        )}
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default RatingDialog;
