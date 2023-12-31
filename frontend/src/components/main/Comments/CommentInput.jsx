import React, { forwardRef, MutableRefObject, useEffect } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "../../../components/shared";

const CommentInput = forwardRef((props, ref) => {
    const { isUpdateMode, isSubmitting, isLoading, ...rest } = props;
    const userPicture = useSelector((state) => state.auth.profilePicture);

    useEffect(() => {
        ref && (ref).current.focus();
    }, [ref])

    return (
        <div className={`flex items-center w-full`}>
            {!isUpdateMode && <Avatar url={userPicture?.url} className="mr-2 flex-shrink-0" size="sm" />}
            <div className="flex-grow">
                <input
                    {...rest}
                    className={`${isSubmitting && isLoading && 'opacity-50'} dark:bg-indigo-1100 dark:!border-gray-800 dark:text-white`}
                    type="text"
                    readOnly={isLoading || isSubmitting}
                    ref={ref}
                />
                {isUpdateMode && <span className="text-xs text-gray-500 ml-2">Press Esc to Cancel</span>}
            </div>
        </div>
    );
});

export default CommentInput;
