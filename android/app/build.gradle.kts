plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
}

android {
    namespace = "com.foresight.novelty"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.foresight.novelty"
        minSdk = 26
        targetSdk = 35
        versionCode = 1
        versionName = "0.1"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        buildConfigField("String", "VONAGE_BASE_URL", "\"YOUR_VONAGE_BASE_URL_HERE\"")
        buildConfigField("String", "UPSTASH_URL", "\"YOUR_UPSTASH_URL_HERE\"")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
    buildFeatures {
        buildConfig = true
    }
}

dependencies {
    implementation(platform(libs.ktor.bom))
    implementation(libs.ktor.client.core)
    implementation(libs.ktor.client.okhttp)
    implementation(libs.ktor.client.content.negotiation)
    implementation(libs.ktor.serialization.kotlinx.json)
    implementation(libs.arrow.core)
    implementation(libs.arrow.fx.coroutines)
    implementation(libs.kodein.di)
    implementation(libs.kermit)
    implementation(libs.napier)
    implementation(libs.multiplatform.settings)
    implementation(libs.jsoup)
    implementation(libs.java.jwt)
    implementation(libs.slf4j.api)
    implementation(libs.logback)
    implementation(libs.exposed.core)
    implementation(libs.exposed.dao)
    implementation(libs.exposed.jdbc)
    implementation(libs.sqlite.jdbc)
    implementation(libs.one.signal)
    implementation(libs.segment.analytics)
    implementation(libs.mixpanel)
    implementation(libs.amplitude)
    implementation(libs.stream.webrtc)
}
