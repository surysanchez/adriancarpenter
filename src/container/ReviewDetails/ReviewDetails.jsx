import React from 'react'

function ReviewDetails({reviewDetail}) {
    const {name, description, img} = reviewDetail;
    console.log("reviewDetail" + reviewDetail)
    return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={img} />
                <p>{description}</p>
            </div>
            <div className="review-name">
                <h5>{name}</h5>
            </div>
        </div>
    );
}

export default ReviewDetails