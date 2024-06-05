import {
    jsonConfiguration
} from '#core/types/object/json';

// TODO(zhouyx@: Rename file and object name)
const defaultConfig = jsonConfiguration({
    'transport': {
        'beacon': true,
        'xhrpost': true,
        'image': true
    },
    'vars': {
        'accessReaderId': 'ACCESS_READER_ID',
        'ampGeo': 'AMP_GEO',
        'ampState': 'AMP_STATE',
        'ampVersion': 'AMP_VERSION',
        'ampdocHost': 'AMPDOC_HOST',
        'ampdocHostname': 'AMPDOC_HOSTNAME',
        'ampdocMeta': 'AMPDOC_META',
        'ampdocUrl': 'AMPDOC_URL',
        'authdata': 'AUTHDATA',
        'availableScreenHeight': 'AVAILABLE_SCREEN_HEIGHT',
        'availableScreenWidth': 'AVAILABLE_SCREEN_WIDTH',
        'backgroundState': 'BACKGROUND_STATE',
        'browserLanguage': 'BROWSER_LANGUAGE',
        'canonicalHost': 'CANONICAL_HOST',
        'canonicalHostname': 'CANONICAL_HOSTNAME',
        'canonicalPath': 'CANONICAL_PATH',
        'canonicalUrl': 'CANONICAL_URL',
        'clientId': 'CLIENT_ID',
        'consentState': 'CONSENT_STATE',
        'consentString': 'CONSENT_STRING',
        'contentLoadTime': 'CONTENT_LOAD_TIME',
        'cookie': 'COOKIE',
        'counter': 'COUNTER',
        'cumulativeLayoutShift': 'CUMULATIVE_LAYOUT_SHIFT',
        'documentCharset': 'DOCUMENT_CHARSET',
        'documentReferrer': 'DOCUMENT_REFERRER',
        'domInteractiveTime': 'DOM_INTERACTIVE_TIME',
        'domainLookupTime': 'DOMAIN_LOOKUP_TIME',
        'experimentBranches': 'EXPERIMENT_BRANCHES',
        'externalReferrer': 'EXTERNAL_REFERRER',
        'firstContentfulPaint': 'FIRST_CONTENTFUL_PAINT',
        'firstInputDelay': 'FIRST_INPUT_DELAY',
        'firstViewportReady': 'FIRST_VIEWPORT_READY',
        'fragmentParam': 'FRAGMENT_PARAM',
        'htmlAttr': 'HTML_ATTR',
        'incrementalEngagedTime': 'INCREMENTAL_ENGAGED_TIME',
        'interactionToNextPaint': 'INTERACTION_TO_NEXT_PAINT',
        'largestContentfulPaint': 'LARGEST_CONTENTFUL_PAINT',
        'makeBodyVisible': 'MAKE_BODY_VISIBLE',
        'navRedirectCount': 'NAV_REDIRECT_COUNT',
        'navTiming': 'NAV_TIMING',
        'navType': 'NAV_TYPE',
        'pageDownloadTime': 'PAGE_DOWNLOAD_TIME',
        'pageLoadTime': 'PAGE_LOAD_TIME',
        'pageViewId': 'PAGE_VIEW_ID',
        'pageViewId64': 'PAGE_VIEW_ID_64',
        'queryParam': 'QUERY_PARAM',
        'random': 'RANDOM',
        'redirectTime': 'REDIRECT_TIME',
        'resourceTiming': 'RESOURCE_TIMING',
        'screenColorDepth': 'SCREEN_COLOR_DEPTH',
        'screenHeight': 'SCREEN_HEIGHT',
        'screenWidth': 'SCREEN_WIDTH',
        'scrollHeight': 'SCROLL_HEIGHT',
        'scrollLeft': 'SCROLL_LEFT',
        'scrollTop': 'SCROLL_TOP',
        'scrollWidth': 'SCROLL_WIDTH',
        'sessionId': 'SESSION_ID',
        'sessionCount': 'SESSION_COUNT',
        'sessionEngaged': 'SESSION_ENGAGED',
        'sessionEventTimestamp': 'SESSION_EVENT_TIMESTAMP',
        'sessionTimestamp': 'SESSION_TIMESTAMP',
        'serverResponseTime': 'SERVER_RESPONSE_TIME',
        'sourceHost': 'SOURCE_HOST',
        'sourceHostname': 'SOURCE_HOSTNAME',
        'sourcePath': 'SOURCE_PATH',
        'sourceUrl': 'SOURCE_URL',
        'tcpConnectTime': 'TCP_CONNECT_TIME',
        'timestamp': 'TIMESTAMP',
        'timezone': 'TIMEZONE',
        'timezoneCode': 'TIMEZONE_CODE',
        'title': 'TITLE',
        'totalEngagedTime': 'TOTAL_ENGAGED_TIME',
        'uach': 'UACH',
        'userAgent': 'USER_AGENT',
        'viewer': 'VIEWER',
        'viewportHeight': 'VIEWPORT_HEIGHT',
        'viewportWidth': 'VIEWPORT_WIDTH',
    },
});

/**
 * @const {!JsonObject}
 */
export const DEFAULT_CONFIG = defaultConfig;