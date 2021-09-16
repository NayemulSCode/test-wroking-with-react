import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './Skeleton.css'
const SkeletonExample =() => {
    return (
        <div className="skeleton">
        <SkeletonTheme color="#202020" highlightColor="#444">
            <div>
                <Skeleton 
                    count={1}
                    duration={2}
                    delay={2}
                    width={300}
                    height={200}
                />
            </div>
            <div className="skeleton__Profile">
                <Skeleton 
                    style={{marginRight:'10px'}}
                    count={1}
                    duration={2}
                    delay={1}
                    width={50}
                    height={50}
                    circle={true}
                />
                <div className="skeleton__Profile__info">
                    <Skeleton 
                        count={1}
                        duration={2}
                        delay={1}
                        width={200}
                        height={20}
                    />
                    <Skeleton 
                        count={1}
                        duration={2}
                        delay={1}
                        width={120}
                        height={10}
                    /> 
                </div> 
            </div>
            <Skeleton
                style={{marginTop:"10px"}}
                count={1}
                duration={1}
                delay={1}
                width={200}
                height={20}
            /> 
        </SkeletonTheme>
</div>
    )
}

export default SkeletonExample
