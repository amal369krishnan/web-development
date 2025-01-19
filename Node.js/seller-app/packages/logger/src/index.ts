/* eslint-disable @typescript-eslint/consistent-type-imports */
import {Transform} from 'node:stream';
import pino from 'pino';
import build from 'pino-abstract-transport';
import {omit} from 'lodash';
import {DateTime} from 'luxon';

export function transport(options = {}) {
	return build(async source => {
		for await (const object of source) {
			try {
				logger.info(
					{
						audit: omit(object, ['level', 'source']),
						time: object?.time as number || DateTime.utc().toMillis(),
					} as {
						audit: unknown;
						time: number;
					},
					`audit:${(object.type as string)?.toLowerCase() || 'unknown'}`,
				);
			} catch (error: unknown) {
				logger.error(error);
			}
		}
	}, options) as Transform;
}

export const logger = pino();
