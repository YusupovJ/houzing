import React, { memo } from "react";
import Skeleton from "react-loading-skeleton";
import { LoadingSkeletonStyle } from "./style";

const LoadingElement = () => {
	return (
		<div className="loading__element">
			<Skeleton className="loading__image" />
			<div className="loading__body">
				<Skeleton className="loading__name" />
				<Skeleton className="loading__address" />
				<br />
				<div className="loading__actions">
					<div>
						<Skeleton width={40} style={{ marginBottom: 4 }} />
						<Skeleton width={60} />
					</div>
					<div style={{ display: "flex", alignItems: "flex-end" }}>
						<Skeleton
							width={16}
							height={16}
							style={{ marginRight: 5 }}
							circle
							className="loading__action"
						/>
						<Skeleton width={16} height={16} circle className="loading__action" />
					</div>
				</div>
			</div>
		</div>
	);
};

const LoadingSkeleton = () => {
	return (
		<LoadingSkeletonStyle className="loading">
			<div className="loading__wrapper">
				<div className="loading__elements">
					<Skeleton className="loading__title" />
					<LoadingElement />
					<LoadingElement />
					<LoadingElement />
					<LoadingElement />
				</div>
				<div className="loading__column loading__column_no-tablet">
					<Skeleton className="loading__title" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
				</div>
				<div className="loading__column loading__column_no-tablet">
					<Skeleton className="loading__title" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
				</div>
				<div className="loading__column loading__column_no-mobile">
					<Skeleton className="loading__title" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
					<Skeleton className="loading__skeleton" />
				</div>
			</div>
		</LoadingSkeletonStyle>
	);
};

export default memo(LoadingSkeleton);
