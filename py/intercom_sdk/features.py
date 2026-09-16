# Intercom SDK feature factory

from intercom_sdk.feature.base_feature import IntercomBaseFeature
from intercom_sdk.feature.debug_feature import IntercomDebugFeature
from intercom_sdk.feature.idempotency_feature import IntercomIdempotencyFeature
from intercom_sdk.feature.metrics_feature import IntercomMetricsFeature
from intercom_sdk.feature.paging_feature import IntercomPagingFeature
from intercom_sdk.feature.ratelimit_feature import IntercomRatelimitFeature
from intercom_sdk.feature.retry_feature import IntercomRetryFeature
from intercom_sdk.feature.test_feature import IntercomTestFeature
from intercom_sdk.feature.timeout_feature import IntercomTimeoutFeature


_FEATURES = {
    "base": lambda: IntercomBaseFeature(),
    "debug": lambda: IntercomDebugFeature(),
    "idempotency": lambda: IntercomIdempotencyFeature(),
    "metrics": lambda: IntercomMetricsFeature(),
    "paging": lambda: IntercomPagingFeature(),
    "ratelimit": lambda: IntercomRatelimitFeature(),
    "retry": lambda: IntercomRetryFeature(),
    "test": lambda: IntercomTestFeature(),
    "timeout": lambda: IntercomTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
