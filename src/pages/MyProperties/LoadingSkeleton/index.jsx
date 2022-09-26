import React from "react";
import Skeleton from "react-loading-skeleton";
import { LoadingSkeletonStyle } from "./style";

const LoadingSkeleton = (props) => {
	return (
		<LoadingSkeletonStyle className="loading">
			<div className="loading__titles">
				<Skeleton className="loading__skeleton" />
				<Skeleton className="loading__skeleton" />
				<Skeleton className="loading__skeleton" />
				<Skeleton className="loading__skeleton" />
			</div>
			<div className="loading__wrapper">
				<div className="loading__elements">
					<div className="loading__element">
						<Skeleton className="loading__image" />
						<div className="loading__body">
							<Skeleton width={150} style={{ marginBottom: 12 }} />
							<Skeleton width={120} />
							<br />
							<Skeleton width={30} style={{ marginBottom: 4 }} />
							<Skeleton width={50} />
						</div>
					</div>
					<div className="loading__element">
						<Skeleton className="loading__image" />
						<div className="loading__body">
							<Skeleton width={150} style={{ marginBottom: 12 }} />
							<Skeleton width={120} />
							<br />
							<Skeleton width={30} style={{ marginBottom: 4 }} />
							<Skeleton width={50} />
						</div>
					</div>
					<div className="loading__element">
						<Skeleton className="loading__image" />
						<div className="loading__body">
							<Skeleton width={150} style={{ marginBottom: 12 }} />
							<Skeleton width={120} />
							<br />
							<Skeleton width={30} style={{ marginBottom: 4 }} />
							<Skeleton width={50} />
						</div>
					</div>
					<div className="loading__element">
						<Skeleton className="loading__image" />
						<div className="loading__body">
							<Skeleton width={150} style={{ marginBottom: 12 }} />
							<Skeleton width={120} />
							<br />
							<Skeleton width={30} style={{ marginBottom: 4 }} />
							<Skeleton width={50} />
						</div>
					</div>
				</div>
				<div>
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
				</div>
				<div>
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
				</div>
				<div>
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
				</div>
			</div>
		</LoadingSkeletonStyle>
	);
};

export default LoadingSkeleton;
