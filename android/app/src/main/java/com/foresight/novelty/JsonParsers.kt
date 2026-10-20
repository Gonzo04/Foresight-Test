package com.foresight.novelty

import org.jsoup.Jsoup

fun parseNewsPreview(html: String): String {
    return Jsoup.parse(html).title()
}
