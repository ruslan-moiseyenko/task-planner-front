import debounce from 'lodash.debounce';
import { useCallback, useEffect } from 'react';
import { UseFormWatch } from 'react-hook-form';

import { TypeTaskFormState } from '@/types/task.types';

import { useCreateTask } from './useCreateTask';
import { useUpdateTask } from './useUpdateTask';

interface IUseTaskDebounce {
	watch: UseFormWatch<TypeTaskFormState>;
	itemId: string;
}

export function useTaskDebounce({ watch, itemId }: IUseTaskDebounce) {
	const { updateTask } = useUpdateTask();
	const { createTask } = useCreateTask();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedCreateTask = useCallback(
		debounce((formData: TypeTaskFormState) => {
			createTask(formData);
		}, 1000),
		[],
	);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedUpdateTask = useCallback(
		debounce((formData: TypeTaskFormState) => {
			updateTask({ id: itemId, data: formData });
		}, 500),
		[updateTask, itemId],
	);

	useEffect(() => {
		const { unsubscribe } = watch(formData => {
			if (itemId) {
				debouncedUpdateTask({
					...formData,
					priority: formData.priority || undefined,
				});
			} else {
				console.log('🚀 ~ Should work Create Task:');
				debouncedCreateTask(formData);
			}
		});

		return () => {
			unsubscribe();
		};
	}, [debouncedUpdateTask, debouncedCreateTask, itemId, watch]);
}
