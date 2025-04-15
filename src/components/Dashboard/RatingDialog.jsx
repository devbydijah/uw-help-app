import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogDescription,
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
    <AlertDialogContent
      className="w-full max-w-md p-6 -mt-20 bg-white border border-white"
      aria-describedby="rating-dialog-description"
    >
      <AlertDialogHeader>
        <div className="flex flex-col items-center">
          <img src={ThumbsUpIcon} alt="Thumbs Up" className="w-24 h-24 mb-4" />
          <AlertDialogTitle>
            {isRated ? "Thank you for your rating" : "Rate this service"}
          </AlertDialogTitle>
        </div>
      </AlertDialogHeader>
      <AlertDialogDescription
        id="rating-dialog-description"
        className="text-center"
      >
        {isRated
          ? "We appreciate your feedback. Your rating helps us improve our service."
          : "Please provide your rating for the service you received."}
      </AlertDialogDescription>
      {!isRated && (
        <div className="flex justify-center mt-4">
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
      )}
      <AlertDialogFooter className="flex justify-center items-center mt-4">
        <button
          onClick={handleDialogClose}
          className="px-4 py-2 bg-green-900 text-white rounded-full hover:bg-green-800"
        >
          Close
        </button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default RatingDialog;
