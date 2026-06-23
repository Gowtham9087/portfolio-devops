import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals'
import * as Sentry from '@sentry/react'
import logger from './logger'

const reportVital = ({ name, value, rating }) => {
  logger.info(`Web Vital: ${name} = ${Math.round(value)}ms [${rating}]`)

  Sentry.addBreadcrumb({
    category: 'web-vitals',
    message: `${name}: ${Math.round(value)}`,
    level: rating === 'good' ? 'info' : rating === 'needs-improvement' ? 'warning' : 'error',
  })
}

export const measureVitals = () => {
  onCLS(reportVital)
  onFID(reportVital)
  onLCP(reportVital)
  onFCP(reportVital)
  onTTFB(reportVital)
}