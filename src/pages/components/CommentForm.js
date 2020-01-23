import React from 'react';

const CommentForm = (props) => {
    return(
        <form action="#" className="reply-form">
            <div className="row">
                <div className="col-lg-6">
                <input type="text" placeholder="Your name" className="reply-form__field" />
                </div>
                <div className="col-lg-6">
                <input type="text" placeholder="Enter email" className="reply-form__field" />
                </div>
                <div className="col-lg-12">
                <textarea placeholder="Write message" className="reply-form__field" defaultValue={""} />
                <button className="reply-form__btn" type="submit">Submit Comment</button>
                </div>
            </div>
        </form>
    )
}

export default CommentForm;