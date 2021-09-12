import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { useForm } from "react-hook-form";
const Rating = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [rating, setRating] = useState(0);

    const ratingChanged = (newRating) => {
        setRating(newRating);
        console.log(newRating);
      };
    const onSubmit =(data, e)=>{
        e.preventDefault();
        const newComment = {
            ...data,
            rating
        }
        console.log(newComment);
    }
    return (
        <div style={{width: '300px', alignItems:'center'}}>
            <p>Rating</p>
            <ReactStars
                count={5}
                value={0.5}
                onChange={ratingChanged}
                size={54}
                isHalf = {true}
                edit={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fas fa-star-half-alt"></i>}
                fullIcon={<i className="fas fa-star"></i>}
                activeColor="#ffd700"
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("comment", { required: true })} />
                {errors.comment?.type === 'required' && "First name is required"}
                <input type="submit" />
            </form>
        </div>
    )
}

export default Rating
