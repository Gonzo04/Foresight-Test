package com.foresight.novelty

import co.touchlab.kermit.Logger
import io.github.aakira.napier.Napier

class FeedRepository {
    fun refresh() {
        Logger.i("refreshing novelty feed")
        Napier.i("using Kotlin dependencies from version catalog")
    }
}
