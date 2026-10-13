module.exports = [
(()=>{"use strict";return[
"[externals]/@payloadcms/db-postgres [external] (@payloadcms/db-postgres, esm_import, [project]/node_modules/@payloadcms/db-postgres)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("@payloadcms/db-postgres-0bcdb796bf5a68b7");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/payload [external] (payload, esm_import, [project]/node_modules/payload)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("payload-e448a27c99c096d3");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/payload/internal [external] (payload/internal, esm_import, [project]/node_modules/payload)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("payload-e448a27c99c096d3/internal");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/payload/shared [external] (payload/shared, esm_import, [project]/node_modules/payload)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("payload-e448a27c99c096d3/shared");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/sharp [external] (sharp, esm_import, [project]/node_modules/sharp)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("sharp-20c6a5da84e2135f");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/@aws-sdk/core/dist-es/submodules/util/util-format-url/format-url.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatUrl",
    ()=>formatUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$querystring$2d$builder$2f$buildQueryString$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/protocols/querystring-builder/buildQueryString.js [app-rsc] (ecmascript)");
;
function formatUrl(request) {
    const { port, query } = request;
    let { protocol, path, hostname } = request;
    if (protocol && protocol.slice(-1) !== ":") {
        protocol += ":";
    }
    if (port) {
        hostname += `:${port}`;
    }
    if (path && path.charAt(0) !== "/") {
        path = `/${path}`;
    }
    let queryString = query ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$querystring$2d$builder$2f$buildQueryString$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildQueryString"])(query) : "";
    if (queryString && queryString[0] !== "?") {
        queryString = `?${queryString}`;
    }
    let auth = "";
    if (request.username != null || request.password != null) {
        const username = request.username ?? "";
        const password = request.password ?? "";
        auth = `${username}:${password}@`;
    }
    let fragment = "";
    if (request.fragment) {
        fragment = `#${request.fragment}`;
    }
    return `${protocol}//${auth}${hostname}${path}${queryString}${fragment}`;
}
}),
"[project]/node_modules/@aws-sdk/lib-storage/dist-es/Upload.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>Upload
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__ = __turbopack_context__.i("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs, [project]/node_modules/@aws-sdk/client-s3)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$toEndpointV1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/toEndpointV1.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$extended$2d$encode$2d$uri$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$byteLength$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/lib-storage/dist-es/byteLength.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$byteLengthSource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/lib-storage/dist-es/byteLengthSource.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/lib-storage/dist-es/chunker.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
class Upload extends __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"] {
    static MIN_PART_SIZE = 1024 * 1024 * 5;
    MAX_PARTS = 10_000;
    queueSize = 4;
    partSize;
    leavePartsOnError = false;
    tags = [];
    client;
    params;
    totalBytes;
    totalBytesSource;
    bytesUploadedSoFar;
    abortController;
    concurrentUploaders = [];
    createMultiPartPromise;
    abortMultipartUploadCommand = null;
    uploadedParts = [];
    uploadEnqueuedPartsCount = 0;
    expectedPartsCount;
    uploadId;
    uploadEvent;
    isMultiPart = true;
    singleUploadResult;
    sent = false;
    constructor(options){
        super();
        this.queueSize = options.queueSize || this.queueSize;
        this.leavePartsOnError = options.leavePartsOnError || this.leavePartsOnError;
        this.tags = options.tags || this.tags;
        this.client = options.client;
        this.params = options.params;
        if (!this.params) {
            throw new Error(`InputError: Upload requires params to be passed to upload.`);
        }
        this.totalBytes = this.params.ContentLength ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$byteLength$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["byteLength"])(this.params.Body);
        this.totalBytesSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$byteLengthSource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["byteLengthSource"])(this.params.Body, this.params.ContentLength);
        this.bytesUploadedSoFar = 0;
        this.abortController = options.abortController ?? new AbortController();
        this.partSize = options.partSize || Math.max(Upload.MIN_PART_SIZE, Math.ceil((this.totalBytes || 0) / this.MAX_PARTS));
        if (this.totalBytes !== undefined) {
            this.expectedPartsCount = Math.ceil(this.totalBytes / this.partSize);
        }
        this.__validateInput();
    }
    async abort() {
        this.abortController.abort();
    }
    async done() {
        if (this.sent) {
            throw new Error("@aws-sdk/lib-storage: this instance of Upload has already executed .done(). Create a new instance.");
        }
        this.sent = true;
        return await Promise.race([
            this.__doMultipartUpload(),
            this.__abortTimeout(this.abortController.signal)
        ]);
    }
    on(event, listener) {
        this.uploadEvent = event;
        return super.on(event, listener);
    }
    async __uploadUsingPut(dataPart) {
        this.isMultiPart = false;
        const params = {
            ...this.params,
            Body: dataPart.data
        };
        const clientConfig = this.client.config;
        const requestHandler = clientConfig.requestHandler;
        const eventEmitter = requestHandler instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"] ? requestHandler : null;
        const uploadEventListener = (event)=>{
            this.bytesUploadedSoFar = event.loaded;
            this.totalBytes = event.total;
            this.__notifyProgress({
                loaded: this.bytesUploadedSoFar,
                total: this.totalBytes,
                part: dataPart.partNumber,
                Key: this.params.Key,
                Bucket: this.params.Bucket
            });
        };
        if (eventEmitter !== null) {
            eventEmitter.on("xhr.upload.progress", uploadEventListener);
        }
        const resolved = await Promise.all([
            this.client.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["PutObjectCommand"](params)),
            clientConfig?.endpoint?.()
        ]);
        const putResult = resolved[0];
        let endpoint = resolved[1];
        if (!endpoint) {
            endpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$toEndpointV1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toEndpointV1"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEndpointFromInstructions"])(params, __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["PutObjectCommand"], {
                ...clientConfig
            }));
        }
        if (!endpoint) {
            throw new Error('Could not resolve endpoint from S3 "client.config.endpoint()" nor EndpointsV2.');
        }
        if (eventEmitter !== null) {
            eventEmitter.off("xhr.upload.progress", uploadEventListener);
        }
        const locationKey = this.params.Key.split("/").map((segment)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$extended$2d$encode$2d$uri$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extendedEncodeURIComponent"])(segment)).join("/");
        const locationBucket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$extended$2d$encode$2d$uri$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extendedEncodeURIComponent"])(this.params.Bucket);
        const Location = (()=>{
            const endpointHostnameIncludesBucket = endpoint.hostname.startsWith(`${locationBucket}.`);
            const forcePathStyle = this.client.config.forcePathStyle;
            const optionalPort = endpoint.port ? `:${endpoint.port}` : ``;
            if (forcePathStyle) {
                return `${endpoint.protocol}//${endpoint.hostname}${optionalPort}/${locationBucket}/${locationKey}`;
            }
            if (endpointHostnameIncludesBucket) {
                return `${endpoint.protocol}//${endpoint.hostname}${optionalPort}/${locationKey}`;
            }
            return `${endpoint.protocol}//${locationBucket}.${endpoint.hostname}${optionalPort}/${locationKey}`;
        })();
        this.singleUploadResult = {
            ...putResult,
            Bucket: this.params.Bucket,
            Key: this.params.Key,
            Location
        };
        const totalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$byteLength$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["byteLength"])(dataPart.data);
        this.__notifyProgress({
            loaded: totalSize,
            total: totalSize,
            part: 1,
            Key: this.params.Key,
            Bucket: this.params.Bucket
        });
    }
    async __createMultipartUpload() {
        const requestChecksumCalculation = await this.client.config.requestChecksumCalculation();
        if (!this.createMultiPartPromise) {
            const createCommandParams = {
                ...this.params,
                Body: undefined
            };
            if (requestChecksumCalculation === "WHEN_SUPPORTED") {
                createCommandParams.ChecksumAlgorithm = this.params.ChecksumAlgorithm || __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["ChecksumAlgorithm"].CRC32;
            }
            this.createMultiPartPromise = this.client.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["CreateMultipartUploadCommand"](createCommandParams)).then((createMpuResponse)=>{
                this.abortMultipartUploadCommand = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["AbortMultipartUploadCommand"]({
                    Bucket: this.params.Bucket,
                    Key: this.params.Key,
                    UploadId: createMpuResponse.UploadId
                });
                return createMpuResponse;
            });
        }
        return this.createMultiPartPromise;
    }
    async __doConcurrentUpload(dataFeeder) {
        for await (const dataPart of dataFeeder){
            if (this.uploadEnqueuedPartsCount > this.MAX_PARTS) {
                throw new Error(`Exceeded ${this.MAX_PARTS} parts in multipart upload to Bucket: ${this.params.Bucket} Key: ${this.params.Key}.`);
            }
            if (this.abortController.signal.aborted) {
                return;
            }
            if (dataPart.partNumber === 1 && dataPart.lastPart) {
                return await this.__uploadUsingPut(dataPart);
            }
            if (!this.uploadId) {
                const { UploadId } = await this.__createMultipartUpload();
                this.uploadId = UploadId;
                if (this.abortController.signal.aborted) {
                    return;
                }
            }
            const partSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$byteLength$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["byteLength"])(dataPart.data) || 0;
            const requestHandler = this.client.config.requestHandler;
            const eventEmitter = requestHandler instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"] ? requestHandler : null;
            let lastSeenBytes = 0;
            const uploadEventListener = (event, request)=>{
                const requestPartSize = Number(request.query["partNumber"]) || -1;
                if (requestPartSize !== dataPart.partNumber) {
                    return;
                }
                if (event.total && partSize) {
                    this.bytesUploadedSoFar += event.loaded - lastSeenBytes;
                    lastSeenBytes = event.loaded;
                }
                this.__notifyProgress({
                    loaded: this.bytesUploadedSoFar,
                    total: this.totalBytes,
                    part: dataPart.partNumber,
                    Key: this.params.Key,
                    Bucket: this.params.Bucket
                });
            };
            if (eventEmitter !== null) {
                eventEmitter.on("xhr.upload.progress", uploadEventListener);
            }
            this.uploadEnqueuedPartsCount += 1;
            this.__validateUploadPart(dataPart);
            const partResult = await this.client.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["UploadPartCommand"]({
                ...this.params,
                ContentLength: undefined,
                UploadId: this.uploadId,
                Body: dataPart.data,
                PartNumber: dataPart.partNumber
            }));
            if (eventEmitter !== null) {
                eventEmitter.off("xhr.upload.progress", uploadEventListener);
            }
            if (this.abortController.signal.aborted) {
                return;
            }
            if (!partResult.ETag) {
                throw new Error(`Part ${dataPart.partNumber} is missing ETag in UploadPart response. Missing Bucket CORS configuration for ETag header?`);
            }
            this.uploadedParts.push({
                PartNumber: dataPart.partNumber,
                ETag: partResult.ETag,
                ...partResult.ChecksumCRC32 && {
                    ChecksumCRC32: partResult.ChecksumCRC32
                },
                ...partResult.ChecksumCRC32C && {
                    ChecksumCRC32C: partResult.ChecksumCRC32C
                },
                ...partResult.ChecksumSHA1 && {
                    ChecksumSHA1: partResult.ChecksumSHA1
                },
                ...partResult.ChecksumSHA256 && {
                    ChecksumSHA256: partResult.ChecksumSHA256
                }
            });
            if (eventEmitter === null) {
                this.bytesUploadedSoFar += partSize;
            }
            this.__notifyProgress({
                loaded: this.bytesUploadedSoFar,
                total: this.totalBytes,
                part: dataPart.partNumber,
                Key: this.params.Key,
                Bucket: this.params.Bucket
            });
        }
    }
    async __doMultipartUpload() {
        const dataFeeder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChunk"])(this.params.Body, this.partSize);
        const concurrentUploaderFailures = [];
        for(let index = 0; index < this.queueSize; index++){
            const currentUpload = this.__doConcurrentUpload(dataFeeder).catch((err)=>{
                concurrentUploaderFailures.push(err);
            });
            this.concurrentUploaders.push(currentUpload);
        }
        await Promise.all(this.concurrentUploaders);
        if (concurrentUploaderFailures.length >= 1) {
            await this.markUploadAsAborted();
            throw concurrentUploaderFailures[0];
        }
        if (this.abortController.signal.aborted) {
            await this.markUploadAsAborted();
            throw Object.assign(new Error("Upload aborted."), {
                name: "AbortError"
            });
        }
        let result;
        if (this.isMultiPart) {
            const { expectedPartsCount, uploadedParts, totalBytes, totalBytesSource } = this;
            if (totalBytes !== undefined && expectedPartsCount !== undefined && uploadedParts.length !== expectedPartsCount) {
                await this.markUploadAsAborted();
                throw new Error(`Expected ${expectedPartsCount} part(s) but uploaded ${uploadedParts.length} part(s).
The expected part count is based on the byte-count of the input.params.Body,
which was read from ${totalBytesSource} and is ${totalBytes}.
If this is not correct, provide an override value by setting a number
to input.params.ContentLength in bytes.
`);
            }
            this.uploadedParts.sort((a, b)=>a.PartNumber - b.PartNumber);
            const uploadCompleteParams = {
                ...this.params,
                Body: undefined,
                UploadId: this.uploadId,
                MultipartUpload: {
                    Parts: this.uploadedParts
                }
            };
            result = await this.client.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["CompleteMultipartUploadCommand"](uploadCompleteParams));
            if (typeof result?.Location === "string" && result.Location.includes("%2F")) {
                result.Location = result.Location.replace(/%2F/g, "/");
            }
        } else {
            result = this.singleUploadResult;
        }
        this.abortMultipartUploadCommand = null;
        if (this.tags.length) {
            await this.client.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["PutObjectTaggingCommand"]({
                ...this.params,
                Tagging: {
                    TagSet: this.tags
                }
            }));
        }
        return result;
    }
    async markUploadAsAborted() {
        if (this.uploadId && !this.leavePartsOnError && null !== this.abortMultipartUploadCommand) {
            await this.client.send(this.abortMultipartUploadCommand);
            this.abortMultipartUploadCommand = null;
        }
    }
    __notifyProgress(progress) {
        if (this.uploadEvent) {
            this.emit(this.uploadEvent, progress);
        }
    }
    async __abortTimeout(abortSignal) {
        return new Promise((resolve, reject)=>{
            abortSignal.onabort = ()=>{
                const abortError = new Error("Upload aborted.");
                abortError.name = "AbortError";
                reject(abortError);
            };
        });
    }
    __validateUploadPart(dataPart) {
        const actualPartSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$byteLength$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["byteLength"])(dataPart.data);
        if (actualPartSize === undefined) {
            throw new Error(`A dataPart was generated without a measurable data chunk size for part number ${dataPart.partNumber}`);
        }
        if (dataPart.partNumber === 1 && dataPart.lastPart) {
            return;
        }
        if (!dataPart.lastPart && actualPartSize !== this.partSize) {
            throw new Error(`The byte size for part number ${dataPart.partNumber}, size ${actualPartSize} does not match expected size ${this.partSize}`);
        }
    }
    __validateInput() {
        if (!this.client) {
            throw new Error(`InputError: Upload requires a AWS client to do uploads with.`);
        }
        if (this.partSize < Upload.MIN_PART_SIZE) {
            throw new Error(`EntityTooSmall: Your proposed upload part size [${this.partSize}] is smaller than the minimum allowed size [${Upload.MIN_PART_SIZE}] (5MB)`);
        }
        if (this.queueSize < 1) {
            throw new Error(`Queue size: Must have at least one uploading queue.`);
        }
    }
}
}),
"[project]/node_modules/@aws-sdk/lib-storage/dist-es/byteLength.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "byteLength",
    ()=>byteLength
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/buffer [external] (buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$runtimeConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/lib-storage/dist-es/runtimeConfig.js [app-rsc] (ecmascript)");
;
;
const byteLength = (input)=>{
    if (input == null) {
        return 0;
    }
    if (typeof input === "string") {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__["Buffer"].byteLength(input);
    }
    if (typeof input.byteLength === "number") {
        return input.byteLength;
    } else if (typeof input.length === "number") {
        return input.length;
    } else if (typeof input.size === "number") {
        return input.size;
    } else if (typeof input.start === "number" && typeof input.end === "number") {
        return input.end + 1 - input.start;
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$runtimeConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtimeConfig"].isFileReadStream(input)) {
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$runtimeConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtimeConfig"].statSync(input.path).size;
        } catch (error) {
            return undefined;
        }
    }
    return undefined;
};
}),
"[project]/node_modules/@aws-sdk/lib-storage/dist-es/byteLengthSource.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BYTE_LENGTH_SOURCE",
    ()=>BYTE_LENGTH_SOURCE,
    "byteLengthSource",
    ()=>byteLengthSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$runtimeConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/lib-storage/dist-es/runtimeConfig.js [app-rsc] (ecmascript)");
;
var BYTE_LENGTH_SOURCE;
(function(BYTE_LENGTH_SOURCE) {
    BYTE_LENGTH_SOURCE["EMPTY_INPUT"] = "a null or undefined Body";
    BYTE_LENGTH_SOURCE["CONTENT_LENGTH"] = "the ContentLength property of the params set by the caller";
    BYTE_LENGTH_SOURCE["STRING_LENGTH"] = "the encoded byte length of the Body string";
    BYTE_LENGTH_SOURCE["TYPED_ARRAY"] = "the byteLength of a typed byte array such as Uint8Array";
    BYTE_LENGTH_SOURCE["LENGTH"] = "the value of Body.length";
    BYTE_LENGTH_SOURCE["SIZE"] = "the value of Body.size";
    BYTE_LENGTH_SOURCE["START_END_DIFF"] = "the numeric difference between Body.start and Body.end";
    BYTE_LENGTH_SOURCE["STAT"] = "the size of the file given by Body.path on disk as reported by statSync";
})(BYTE_LENGTH_SOURCE || (BYTE_LENGTH_SOURCE = {}));
const byteLengthSource = (input, override)=>{
    if (override != null) {
        return BYTE_LENGTH_SOURCE.CONTENT_LENGTH;
    }
    if (input == null) {
        return BYTE_LENGTH_SOURCE.EMPTY_INPUT;
    }
    if (typeof input === "string") {
        return BYTE_LENGTH_SOURCE.STRING_LENGTH;
    }
    if (typeof input.byteLength === "number") {
        return BYTE_LENGTH_SOURCE.TYPED_ARRAY;
    } else if (typeof input.length === "number") {
        return BYTE_LENGTH_SOURCE.LENGTH;
    } else if (typeof input.size === "number") {
        return BYTE_LENGTH_SOURCE.SIZE;
    } else if (typeof input.start === "number" && typeof input.end === "number") {
        return BYTE_LENGTH_SOURCE.START_END_DIFF;
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$runtimeConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtimeConfig"].isFileReadStream(input)) {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$runtimeConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtimeConfig"].statSync(input.path).size;
            return BYTE_LENGTH_SOURCE.STAT;
        } catch (error) {
            return undefined;
        }
    }
    return undefined;
};
}),
"[project]/node_modules/@aws-sdk/lib-storage/dist-es/chunker.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChunk",
    ()=>getChunk
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/buffer [external] (buffer, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/stream [external] (stream, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunks$2f$getChunkStream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getChunkStream.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunks$2f$getChunkUint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getChunkUint8Array.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunks$2f$getDataReadable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getDataReadable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunks$2f$getDataReadableStream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getDataReadableStream.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const getChunk = (data, partSize)=>{
    if (data instanceof Uint8Array) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunks$2f$getChunkUint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChunkUint8Array"])(data, partSize);
    }
    if (data instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["Readable"]) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunks$2f$getChunkStream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChunkStream"])(data, partSize, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunks$2f$getDataReadable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDataReadable"]);
    }
    if (data instanceof String || typeof data === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunks$2f$getChunkUint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChunkUint8Array"])(__TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__["Buffer"].from(data), partSize);
    }
    if (typeof data.stream === "function") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunks$2f$getChunkStream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChunkStream"])(data.stream(), partSize, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunks$2f$getDataReadableStream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDataReadableStream"]);
    }
    if (data instanceof ReadableStream) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunks$2f$getChunkStream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChunkStream"])(data, partSize, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$chunks$2f$getDataReadableStream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDataReadableStream"]);
    }
    throw new Error("Body Data is unsupported format, expected data to be one of: string | Uint8Array | Buffer | Readable | ReadableStream | Blob;.");
};
}),
"[project]/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getChunkStream.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChunkStream",
    ()=>getChunkStream
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/buffer [external] (buffer, cjs)");
;
async function* getChunkStream(data, partSize, getNextData) {
    let partNumber = 1;
    const currentBuffer = {
        chunks: [],
        length: 0
    };
    for await (const datum of getNextData(data)){
        currentBuffer.chunks.push(datum);
        currentBuffer.length += datum.byteLength;
        while(currentBuffer.length > partSize){
            const dataChunk = currentBuffer.chunks.length > 1 ? __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__["Buffer"].concat(currentBuffer.chunks) : currentBuffer.chunks[0];
            yield {
                partNumber,
                data: dataChunk.subarray(0, partSize)
            };
            currentBuffer.chunks = [
                dataChunk.subarray(partSize)
            ];
            currentBuffer.length = currentBuffer.chunks[0].byteLength;
            partNumber += 1;
        }
    }
    yield {
        partNumber,
        data: currentBuffer.chunks.length !== 1 ? __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__["Buffer"].concat(currentBuffer.chunks) : currentBuffer.chunks[0],
        lastPart: true
    };
}
}),
"[project]/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getChunkUint8Array.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChunkUint8Array",
    ()=>getChunkUint8Array
]);
async function* getChunkUint8Array(data, partSize) {
    let partNumber = 1;
    let startByte = 0;
    let endByte = partSize;
    while(endByte < data.byteLength){
        yield {
            partNumber,
            data: data.subarray(startByte, endByte)
        };
        partNumber += 1;
        startByte = endByte;
        endByte = startByte + partSize;
    }
    yield {
        partNumber,
        data: data.subarray(startByte),
        lastPart: true
    };
}
}),
"[project]/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getDataReadable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDataReadable",
    ()=>getDataReadable
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/buffer [external] (buffer, cjs)");
;
async function* getDataReadable(data) {
    for await (const chunk of data){
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__["Buffer"].isBuffer(chunk) || chunk instanceof Uint8Array) {
            yield chunk;
        } else {
            yield __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__["Buffer"].from(chunk);
        }
    }
}
}),
"[project]/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getDataReadableStream.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDataReadableStream",
    ()=>getDataReadableStream
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/buffer [external] (buffer, cjs)");
;
async function* getDataReadableStream(data) {
    const reader = data.getReader();
    try {
        while(true){
            const { done, value } = await reader.read();
            if (done) {
                return;
            }
            if (__TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__["Buffer"].isBuffer(value) || value instanceof Uint8Array) {
                yield value;
            } else {
                yield __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__["Buffer"].from(value);
            }
        }
    } catch (e) {
        throw e;
    } finally{
        reader.releaseLock();
    }
}
}),
"[project]/node_modules/@aws-sdk/lib-storage/dist-es/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$Upload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/lib-storage/dist-es/Upload.js [app-rsc] (ecmascript)");
;
}),
"[project]/node_modules/@aws-sdk/lib-storage/dist-es/runtimeConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runtimeConfig",
    ()=>runtimeConfig
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$runtimeConfig$2e$shared$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/lib-storage/dist-es/runtimeConfig.shared.js [app-rsc] (ecmascript)");
;
;
const runtimeConfig = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$runtimeConfig$2e$shared$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtimeConfigShared"],
    runtime: "node",
    statSync: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["statSync"],
    isFileReadStream (f) {
        return f instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["ReadStream"];
    }
};
}),
"[project]/node_modules/@aws-sdk/lib-storage/dist-es/runtimeConfig.shared.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runtimeConfigShared",
    ()=>runtimeConfigShared
]);
const runtimeConfigShared = {
    statSync: ()=>{},
    isFileReadStream (f) {
        return false;
    }
};
}),
"[project]/node_modules/@aws-sdk/s3-request-presigner/dist-es/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALGORITHM_IDENTIFIER",
    ()=>ALGORITHM_IDENTIFIER,
    "ALGORITHM_QUERY_PARAM",
    ()=>ALGORITHM_QUERY_PARAM,
    "AMZ_DATE_QUERY_PARAM",
    ()=>AMZ_DATE_QUERY_PARAM,
    "CREDENTIAL_QUERY_PARAM",
    ()=>CREDENTIAL_QUERY_PARAM,
    "EXPIRES_QUERY_PARAM",
    ()=>EXPIRES_QUERY_PARAM,
    "HOST_HEADER",
    ()=>HOST_HEADER,
    "SHA256_HEADER",
    ()=>SHA256_HEADER,
    "SIGNED_HEADERS_QUERY_PARAM",
    ()=>SIGNED_HEADERS_QUERY_PARAM,
    "UNSIGNED_PAYLOAD",
    ()=>UNSIGNED_PAYLOAD
]);
const UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
const SHA256_HEADER = "X-Amz-Content-Sha256";
const ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
const CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
const AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
const SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
const EXPIRES_QUERY_PARAM = "X-Amz-Expires";
const HOST_HEADER = "host";
const ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
}),
"[project]/node_modules/@aws-sdk/s3-request-presigner/dist-es/getSignedUrl.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSignedUrl",
    ()=>getSignedUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$util$2f$util$2d$format$2d$url$2f$format$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/core/dist-es/submodules/util/util-format-url/format-url.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$httpRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/httpRequest.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$presigner$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/s3-request-presigner/dist-es/presigner.js [app-rsc] (ecmascript)");
;
;
;
;
const getSignedUrl = async (client, command, options = {})=>{
    let s3Presigner;
    let region;
    if (typeof client.config.endpointProvider === "function") {
        const endpointV2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEndpointFromInstructions"])(command.input, command.constructor, client.config);
        const authScheme = endpointV2.properties?.authSchemes?.[0];
        if (authScheme?.name === "sigv4a") {
            region = authScheme?.signingRegionSet?.join(",");
        } else {
            region = authScheme?.signingRegion;
        }
        s3Presigner = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$presigner$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["S3RequestPresigner"]({
            ...client.config,
            signingName: authScheme?.signingName,
            region: async ()=>region
        });
    } else {
        s3Presigner = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$presigner$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["S3RequestPresigner"](client.config);
    }
    const presignInterceptMiddleware = (next, context)=>async (args)=>{
            const { request } = args;
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$httpRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpRequest"].isInstance(request)) {
                throw new Error("Request to be presigned is not an valid HTTP request.");
            }
            delete request.headers["amz-sdk-invocation-id"];
            delete request.headers["amz-sdk-request"];
            delete request.headers["x-amz-user-agent"];
            let presigned;
            const presignerOptions = {
                ...options,
                signingRegion: options.signingRegion ?? context["signing_region"] ?? region,
                signingService: options.signingService ?? context["signing_service"]
            };
            if (context.s3ExpressIdentity) {
                presigned = await s3Presigner.presignWithCredentials(request, context.s3ExpressIdentity, presignerOptions);
            } else {
                presigned = await s3Presigner.presign(request, presignerOptions);
            }
            return {
                response: {},
                output: {
                    $metadata: {
                        httpStatusCode: 200
                    },
                    presigned
                }
            };
        };
    const middlewareName = "presignInterceptMiddleware";
    const clientStack = client.middlewareStack.clone();
    clientStack.addRelativeTo(presignInterceptMiddleware, {
        name: middlewareName,
        relation: "before",
        toMiddleware: "awsAuthMiddleware",
        override: true
    });
    const handler = command.resolveMiddleware(clientStack, client.config, {});
    const { output } = await handler({
        input: command.input
    });
    const { presigned } = output;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$util$2f$util$2d$format$2d$url$2f$format$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatUrl"])(presigned);
};
}),
"[project]/node_modules/@aws-sdk/s3-request-presigner/dist-es/presigner.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "S3RequestPresigner",
    ()=>S3RequestPresigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$SignatureV4MultiRegion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/s3-request-presigner/dist-es/constants.js [app-rsc] (ecmascript)");
;
;
class S3RequestPresigner {
    signer;
    constructor(options){
        const resolvedOptions = {
            service: options.signingName || options.service || "s3",
            uriEscapePath: options.uriEscapePath || false,
            applyChecksum: options.applyChecksum || false,
            ...options
        };
        this.signer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$SignatureV4MultiRegion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignatureV4MultiRegion"](resolvedOptions);
    }
    presign(requestToSign, { unsignableHeaders = new Set(), hoistableHeaders = new Set(), unhoistableHeaders = new Set(), ...options } = {}) {
        this.prepareRequest(requestToSign, {
            unsignableHeaders,
            unhoistableHeaders,
            hoistableHeaders
        });
        return this.signer.presign(requestToSign, {
            expiresIn: 900,
            unsignableHeaders,
            unhoistableHeaders,
            ...options
        });
    }
    presignWithCredentials(requestToSign, credentials, { unsignableHeaders = new Set(), hoistableHeaders = new Set(), unhoistableHeaders = new Set(), ...options } = {}) {
        this.prepareRequest(requestToSign, {
            unsignableHeaders,
            unhoistableHeaders,
            hoistableHeaders
        });
        return this.signer.presignWithCredentials(requestToSign, credentials, {
            expiresIn: 900,
            unsignableHeaders,
            unhoistableHeaders,
            ...options
        });
    }
    prepareRequest(requestToSign, { unsignableHeaders = new Set(), unhoistableHeaders = new Set(), hoistableHeaders = new Set() } = {}) {
        unsignableHeaders.add("content-type");
        Object.keys(requestToSign.headers).map((header)=>header.toLowerCase()).filter((header)=>header.startsWith("x-amz-server-side-encryption")).forEach((header)=>{
            if (!hoistableHeaders.has(header)) {
                unhoistableHeaders.add(header);
            }
        });
        requestToSign.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA256_HEADER"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UNSIGNED_PAYLOAD"];
        const currentHostHeader = requestToSign.headers.host;
        const port = requestToSign.port;
        const expectedHostHeader = `${requestToSign.hostname}${requestToSign.port != null ? ":" + port : ""}`;
        if (!currentHostHeader || currentHostHeader === requestToSign.hostname && requestToSign.port != null) {
            requestToSign.headers.host = expectedHostHeader;
        }
    }
}
}),
"[project]/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignatureV4MultiRegion",
    ()=>SignatureV4MultiRegion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$signature$2d$v4a$2d$container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$signature$2d$v4$2d$crt$2d$container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$SignatureV4SignWithCredentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4SignWithCredentials.js [app-rsc] (ecmascript)");
;
;
;
class SignatureV4MultiRegion {
    sigv4aSigner;
    sigv4Signer;
    signerOptions;
    static sigv4aDependency() {
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$signature$2d$v4$2d$crt$2d$container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signatureV4CrtContainer"].CrtSignerV4 === "function") {
            return "crt";
        } else if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$signature$2d$v4a$2d$container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signatureV4aContainer"].SignatureV4a === "function") {
            return "js";
        }
        return "none";
    }
    constructor(options){
        this.sigv4Signer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$SignatureV4SignWithCredentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignatureV4SignWithCredentials"](options);
        this.signerOptions = options;
    }
    async sign(requestToSign, options = {}) {
        if (options.signingRegion === "*") {
            return this.getSigv4aSigner().sign(requestToSign, options);
        }
        return this.sigv4Signer.sign(requestToSign, options);
    }
    async signWithCredentials(requestToSign, credentials, options = {}) {
        if (options.signingRegion === "*") {
            const signer = this.getSigv4aSigner();
            const CrtSignerV4 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$signature$2d$v4$2d$crt$2d$container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signatureV4CrtContainer"].CrtSignerV4;
            if (CrtSignerV4 && signer instanceof CrtSignerV4) {
                return signer.signWithCredentials(requestToSign, credentials, options);
            } else {
                throw new Error(`signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. ` + `Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. ` + `You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] ` + `or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. ` + `For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
            }
        }
        return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
    }
    async presign(originalRequest, options = {}) {
        if (options.signingRegion === "*") {
            const signer = this.getSigv4aSigner();
            const CrtSignerV4 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$signature$2d$v4$2d$crt$2d$container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signatureV4CrtContainer"].CrtSignerV4;
            if (CrtSignerV4 && signer instanceof CrtSignerV4) {
                return signer.presign(originalRequest, options);
            } else {
                throw new Error(`presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. ` + `Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. ` + `You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] ` + `or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. ` + `For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
            }
        }
        return this.sigv4Signer.presign(originalRequest, options);
    }
    async presignWithCredentials(originalRequest, credentials, options = {}) {
        if (options.signingRegion === "*") {
            throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
        }
        return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
    }
    getSigv4aSigner() {
        if (!this.sigv4aSigner) {
            const CrtSignerV4 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$signature$2d$v4$2d$crt$2d$container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signatureV4CrtContainer"].CrtSignerV4;
            const JsSigV4aSigner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$signature$2d$v4a$2d$container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signatureV4aContainer"].SignatureV4a;
            if (this.signerOptions.runtime === "node") {
                if (!CrtSignerV4 && !JsSigV4aSigner) {
                    throw new Error("Neither CRT nor JS SigV4a implementation is available. " + "Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. " + "For more information please go to " + "https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
                }
                if (CrtSignerV4 && typeof CrtSignerV4 === "function") {
                    this.sigv4aSigner = new CrtSignerV4({
                        ...this.signerOptions,
                        signingAlgorithm: 1
                    });
                } else if (JsSigV4aSigner && typeof JsSigV4aSigner === "function") {
                    this.sigv4aSigner = new JsSigV4aSigner({
                        ...this.signerOptions
                    });
                } else {
                    throw new Error("Available SigV4a implementation is not a valid constructor. " + "Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a." + "For more information please go to " + "https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
                }
            } else {
                if (!JsSigV4aSigner || typeof JsSigV4aSigner !== "function") {
                    throw new Error("JS SigV4a implementation is not available or not a valid constructor. " + "Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. " + "You must also register the package by calling [require('@aws-sdk/signature-v4a');] " + "or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. " + "For more information please go to " + "https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
                }
                this.sigv4aSigner = new JsSigV4aSigner({
                    ...this.signerOptions
                });
            }
        }
        return this.sigv4aSigner;
    }
}
}),
"[project]/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4SignWithCredentials.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SESSION_TOKEN_HEADER",
    ()=>SESSION_TOKEN_HEADER,
    "SESSION_TOKEN_QUERY_PARAM",
    ()=>SESSION_TOKEN_QUERY_PARAM,
    "SignatureV4SignWithCredentials",
    ()=>SignatureV4SignWithCredentials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$SignatureV4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/SignatureV4.js [app-rsc] (ecmascript)");
;
const SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
const SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();
class SignatureV4SignWithCredentials extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$SignatureV4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignatureV4"] {
    async signWithCredentials(requestToSign, credentials, options) {
        const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
        requestToSign.headers[SESSION_TOKEN_HEADER] = credentials.sessionToken;
        const privateAccess = this;
        setSingleOverride(privateAccess, credentialsWithoutSessionToken);
        return privateAccess.signRequest(requestToSign, options ?? {});
    }
    async presignWithCredentials(requestToSign, credentials, options) {
        const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
        delete requestToSign.headers[SESSION_TOKEN_HEADER];
        requestToSign.headers[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
        requestToSign.query = requestToSign.query ?? {};
        requestToSign.query[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
        const privateAccess = this;
        setSingleOverride(privateAccess, credentialsWithoutSessionToken);
        return this.presign(requestToSign, options);
    }
}
function getCredentialsWithoutSessionToken(credentials) {
    return {
        accessKeyId: credentials.accessKeyId,
        secretAccessKey: credentials.secretAccessKey,
        expiration: credentials.expiration
    };
}
function setSingleOverride(privateAccess, credentialsWithoutSessionToken) {
    const currentCredentialProvider = privateAccess.credentialProvider;
    privateAccess.credentialProvider = ()=>{
        privateAccess.credentialProvider = currentCredentialProvider;
        return Promise.resolve(credentialsWithoutSessionToken);
    };
}
}),
"[project]/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signatureV4CrtContainer",
    ()=>signatureV4CrtContainer
]);
const signatureV4CrtContainer = {
    CrtSignerV4: null
};
}),
"[project]/node_modules/@lexical/a11y/dist/LexicalA11y.dev.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AriaLiveRegionExtension",
    ()=>AriaLiveRegionExtension,
    "EditorModeAnnounceExtension",
    ()=>EditorModeAnnounceExtension,
    "FocusManagerExtension",
    ()=>FocusManagerExtension,
    "FocusTrapExtension",
    ()=>FocusTrapExtension,
    "HistoryAnnounceExtension",
    ()=>HistoryAnnounceExtension,
    "RovingTabIndexExtension",
    ()=>RovingTabIndexExtension
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@lexical/extension/dist/LexicalExtension.dev.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lexical/dist/Lexical.dev.mjs [app-rsc] (ecmascript)");
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function applyVisuallyHidden(el) {
    const style = el.style;
    style.border = '0';
    style.clip = 'rect(0 0 0 0)';
    style.height = '1px';
    style.margin = '-1px';
    style.overflow = 'hidden';
    style.padding = '0';
    style.position = 'absolute';
    style.whiteSpace = 'nowrap';
    style.width = '1px';
}
/**
 * Creates a visually hidden live-region element as a child of `owner` and
 * returns it. WAI-ARIA status message pattern (WCAG 4.1.3). The caller owns
 * the element's lifetime (removal) and applies the `aria-live` politeness and
 * `textContent` reactively.
 */ function createLiveRegion(owner) {
    const region = owner.ownerDocument.createElement('div');
    region.setAttribute('aria-atomic', 'true');
    region.setAttribute('role', 'status');
    applyVisuallyHidden(region);
    owner.appendChild(region);
    return region;
}
const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
].join(',');
function getFocusableElements(container) {
    return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR));
}
function containsComposed(container, target) {
    let current = target;
    while(current !== null){
        if (current === container) {
            return true;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDOMShadowRoot"])(current)) {
            current = current.host;
        } else {
            current = current.parentNode;
        }
    }
    return false;
}
/**
 * Traps Tab / Shift+Tab focus inside `container` and restores focus to
 * the previously-focused element when the returned dispose runs.
 * Intended for modal dialogs and other transient overlays.
 *
 * While active, *any* focus that lands outside the container is pulled
 * back inside via a document-level `focusin` listener. This recovers
 * from Safari's default Tab routing through the browser chrome, but it
 * also means descendants that mount into a portal outside `container`
 * (autocomplete panels, tooltips, toasts that auto-focus themselves)
 * will be yanked back as soon as they take focus. Portal them inside
 * `container`, or skip this helper for those dialogs. The pull-back
 * always lands on the first focusable descendant (or the container as a
 * fallback) — `initialFocus` only applies to the activation-time
 * landing, not to subsequent escape recoveries. Only one trap should be
 * mounted at a time — two active traps install competing document-level
 * `focusin` listeners and will fight over focus.
 *
 * Escape is not intercepted — the owner handles close-key behavior.
 */ function registerFocusTrap(container, options = {}) {
    const initialFocus = options.initialFocus ?? 'firstFocusable';
    const doc = container.ownerDocument;
    const deepActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveElementDeep"])(doc);
    const previouslyFocused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTMLElement"])(deepActive) ? deepActive : null;
    const focusable = getFocusableElements(container);
    if (initialFocus === 'container' && container.hasAttribute('tabindex')) {
        container.focus();
    } else if (focusable.length > 0) {
        focusable[0].focus();
    } else if (container.hasAttribute('tabindex')) {
        container.focus();
    }
    // Full Tab management — every Tab / Shift+Tab is handled here.
    // Boundary-only cycling let Safari's default Tab route out to the
    // browser chrome (URL bar) between presses, producing a visible
    // focus flash. This trades contentEditable Tab indent for a reliable
    // trap; the helper is Modal-only today.
    const keydownHandler = (event)=>{
        if (event.key !== 'Tab') {
            return;
        }
        const currentFocusable = getFocusableElements(container);
        if (currentFocusable.length === 0) {
            event.preventDefault();
            return;
        }
        event.preventDefault();
        const first = currentFocusable[0];
        const last = currentFocusable[currentFocusable.length - 1];
        const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveElementDeep"])(doc);
        const activeIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTMLElement"])(active) && containsComposed(container, active) ? currentFocusable.indexOf(active) : -1;
        if (event.shiftKey) {
            (activeIndex <= 0 ? last : currentFocusable[activeIndex - 1]).focus();
        } else {
            (activeIndex === -1 || activeIndex === currentFocusable.length - 1 ? first : currentFocusable[activeIndex + 1]).focus();
        }
    };
    // Safety net — if focus ever escapes the container (e.g. portal
    // ordering routes the browser's default Tab past the modal in
    // Safari), pull it back to the first focusable inside.
    const focusinHandler = (event)=>{
        const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getComposedEventTarget"])(event);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTMLElement"])(target) || containsComposed(container, target)) {
            return;
        }
        if (options.allowOutside != null && options.allowOutside(target)) {
            return;
        }
        const currentFocusable = getFocusableElements(container);
        if (currentFocusable.length > 0) {
            currentFocusable[0].focus();
        } else if (container.hasAttribute('tabindex')) {
            container.focus();
        }
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeRegister"])(// Placed first so mergeRegister's reverse (LIFO) teardown runs it last,
    // after the focusin listener is removed — otherwise restoring focus to an
    // element outside the container would re-trigger the trap.
    ()=>{
        if (previouslyFocused !== null && typeof previouslyFocused.focus === 'function' && containsComposed(doc, previouslyFocused)) {
            previouslyFocused.focus();
        }
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerEventListener"])(container, 'keydown', keydownHandler), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerEventListener"])(doc, 'focusin', focusinHandler));
}
const DEFAULT_ROVING_SELECTOR = ':scope > button:not([disabled])';
/**
 * Implements the WAI-ARIA roving-tabindex pattern on `container`. One
 * item carries `tabindex="0"` at a time; the rest are `-1`. Arrow keys
 * move focus inside the group; Home / End jump to the ends. Tab leaves
 * the group as a unit, matching the toolbar / menubar pattern.
 *
 * Items are queried lazily on every interaction so additions or
 * removals during the lifetime of the group are picked up without
 * extra wiring.
 */ function registerRovingTabIndex(container, options = {}) {
    const orientation = options.orientation ?? 'horizontal';
    const selector = options.itemSelector ?? DEFAULT_ROVING_SELECTOR;
    const getItems = ()=>Array.from(container.querySelectorAll(selector));
    const applyTabIndex = (items, activeIndex)=>{
        items.forEach((item, i)=>{
            item.tabIndex = i === activeIndex ? 0 : -1;
        });
    };
    const init = ()=>{
        const items = getItems();
        if (items.length === 0) {
            return;
        }
        const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveElementDeep"])(container.ownerDocument);
        const activeIdx = items.findIndex((el)=>el === active);
        applyTabIndex(items, activeIdx >= 0 ? activeIdx : 0);
    };
    init();
    const handler = (event)=>{
        const items = getItems();
        if (items.length === 0) {
            return;
        }
        const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveElementDeep"])(container.ownerDocument);
        const currentIdx = items.findIndex((el)=>el === active);
        if (currentIdx < 0) {
            // Firefox can focus the container itself (e.g. role="toolbar") rather
            // than a child item. Treat any arrow/Home/End as "enter the group at
            // the first item" so the user isn't stuck.
            if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowUp' || event.key === 'Home' || event.key === 'End') {
                event.preventDefault();
                applyTabIndex(items, 0);
                items[0].focus();
            }
            return;
        }
        const horizontal = orientation === 'horizontal' || orientation === 'both';
        const vertical = orientation === 'vertical' || orientation === 'both';
        let nextIdx = currentIdx;
        switch(event.key){
            case 'ArrowRight':
                if (!horizontal) {
                    return;
                }
                nextIdx = currentIdx + 1;
                break;
            case 'ArrowLeft':
                if (!horizontal) {
                    return;
                }
                nextIdx = currentIdx - 1;
                break;
            case 'ArrowDown':
                if (!vertical) {
                    return;
                }
                nextIdx = currentIdx + 1;
                break;
            case 'ArrowUp':
                if (!vertical) {
                    return;
                }
                nextIdx = currentIdx - 1;
                break;
            case 'Home':
                nextIdx = 0;
                break;
            case 'End':
                nextIdx = items.length - 1;
                break;
            default:
                return;
        }
        event.preventDefault();
        // Single wrap for every case: the only out-of-range value is -1 (left/up
        // from the first item), and `currentIdx >= 0` keeps `nextIdx >= -1`, so one
        // `+ length` is enough to normalize.
        nextIdx = (nextIdx + items.length) % items.length;
        applyTabIndex(items, nextIdx);
        items[nextIdx].focus();
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeRegister"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerEventListener"])(container, 'keydown', handler), ()=>{
        const items = getItems();
        items.forEach((item)=>{
            item.tabIndex = 0;
        });
    });
}
const DEFAULT_TOOLBAR_FOCUSABLE_SELECTOR = ':scope > button:not([disabled]), :scope > [tabindex="0"]';
/**
 * Implements the editor-to-toolbar focus jump recommended by the
 * WAI-ARIA APG editor menubar pattern: Alt+F10 inside the editor moves
 * focus to the first focusable in `toolbar`, and Escape inside the
 * toolbar returns focus to the editor.
 *
 * Wires the navigation only. Selection restoration relies on the
 * editor's own focus handling; the editor's last selection is preserved
 * across the jump so toolbar commands act on the same range.
 */ function registerFocusManager(editor, toolbar, options = {}) {
    const selector = options.toolbarItemSelector ?? DEFAULT_TOOLBAR_FOCUSABLE_SELECTOR;
    const handler = (event)=>{
        if (event.key !== 'Escape') {
            return;
        }
        const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getComposedEventTarget"])(event);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTMLElement"])(target)) {
            const items = toolbar.querySelectorAll(selector);
            let isRovingItem = false;
            for (const item of items){
                if (item === target || containsComposed(item, target)) {
                    isRovingItem = true;
                    break;
                }
            }
            if (!isRovingItem) {
                return;
            }
        }
        const rootElement = editor.getRootElement();
        if (rootElement === null) {
            return;
        }
        event.preventDefault();
        // Keep Escape inside the toolbar — don't let it bubble to any
        // window-level Modal close handler.
        event.stopPropagation();
        // `editor.focus()` restores the prior selection so commands resume
        // where the cursor was before the jump; the `rootElement.focus()`
        // fallback covers test environments where `editor.focus()` does not
        // also move DOM focus.
        editor.focus();
        rootElement.focus();
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_DOWN_COMMAND"], (event)=>{
        if (!event.altKey || event.key !== 'F10') {
            return false;
        }
        const firstItem = toolbar.querySelector('[tabindex="0"]') ?? toolbar.querySelector(selector);
        if (firstItem === null) {
            return false;
        }
        event.preventDefault();
        firstItem.focus();
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerEventListener"])(toolbar, 'keydown', handler));
}
/**
 * Public output of {@link AriaLiveRegionExtension}. The `politeness` and
 * `owner` config values are exposed as runtime-tunable signals — setting
 * `politeness` updates the mounted region's `aria-live`, setting `owner`
 * re-mounts the region — alongside a stable `announce` sink that is valid for
 * the editor's lifetime (callers never see the region element or its disposal).
 */ /**
 * Platform-independent extension that owns a single `aria-live` region for
 * the editor and exposes a stable {@link AriaLiveRegion} sink as its output.
 * Other a11y extensions (`HistoryAnnounceExtension`,
 * `EditorModeAnnounceExtension`) depend on it and announce through
 * `output.announce`.
 *
 * The sink writes to a private `message` signal created in `init`. The
 * `politeness` / `owner` config are exposed as signals (via `namedSignals`).
 * `register` tracks the editor's root element reactively and runs three
 * effects: one creates / disposes the region element as the root document (or
 * `owner`) changes, one applies the current `politeness` to the mounted region,
 * and one mirrors the current message into it. Buffering through signals
 * decouples the stable `announce` (from `build`) from the region element —
 * which comes and goes with the root — and creates the region in the editor's
 * own document (e.g. an iframe-portaled editor) rather than the top-level
 * `document`.
 */ const AriaLiveRegionExtension = {
    build (_editor, config, state) {
        const message = state.getInitResult();
        return {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["namedSignals"])(config),
            announce (text) {
                // Toggle a trailing zero-width space on repeats so re-announcing the
                // same text still registers as a textContent change downstream.
                message.value = text === message.peek() ? text + '\u200B' : text;
            }
        };
    },
    config: {
        owner: null,
        politeness: 'polite'
    },
    dependencies: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RootElementExtension"]
    ],
    // Private reactive message buffer shared by `build` (writer) and `register`
    // (renderer); see the extension doc comment.
    init: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["signal"])(''),
    name: '@lexical/a11y/AriaLiveRegion',
    register (_editor, _config, state) {
        const message = state.getInitResult();
        const { owner, politeness } = state.getOutput();
        const rootElement = state.getDependency(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RootElementExtension"]).output;
        const region = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["signal"])(null);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeRegister"])(// Create / dispose the region as the root document (or `owner`) changes.
        // Subscribe to the root only when no explicit `owner` is configured, so a
        // fixed-owner region isn't torn down and rebuilt on unrelated root churn.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>{
            const ownerEl = owner.value;
            const root = ownerEl ? null : rootElement.value;
            const host = ownerEl ?? (root ? root.ownerDocument.body : null);
            if (!host) {
                return undefined;
            }
            const el = createLiveRegion(host);
            region.value = el;
            return ()=>{
                el.remove();
                region.value = null;
            };
        }), // Apply the (runtime-tunable) politeness to whatever region is mounted.
        // This tracks `region` so it re-applies the attribute to a re-created
        // region (an attribute, not an announcement).
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>{
            const el = region.value;
            if (el) {
                el.setAttribute('aria-live', politeness.value);
            }
        }), // Mirror the current message into whatever region is mounted. Always read
        // `message.value` (to stay subscribed) but read the region with peek() so
        // this re-runs only when the message changes, not when the region is
        // (re)created: replaying the buffered message into a freshly mounted
        // region would make the screen reader re-announce it on every editor
        // remount with no user action.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>{
            const text = message.value;
            const el = region.peek();
            if (el) {
                el.textContent = text;
            }
        }));
    }
};
/**
 * Platform-independent extension that announces undo / redo through the
 * `AriaLiveRegionExtension`'s shared sink.
 */ const HistoryAnnounceExtension = {
    build: (_editor, config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["namedSignals"])(config),
    config: {
        disabled: false,
        redone: 'Redone',
        undone: 'Undone'
    },
    dependencies: [
        AriaLiveRegionExtension
    ],
    name: '@lexical/a11y/HistoryAnnounce',
    register (editor, _config, state) {
        const { disabled, redone, undone } = state.getOutput();
        const { announce } = state.getDependency(AriaLiveRegionExtension).output;
        // Gate registration on `disabled` from an effect so a disabled announcer
        // adds no command overhead at all. Peek the message signals at dispatch
        // time so changing them doesn't re-register. Both return false to keep the
        // history command chain intact.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>disabled.value ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UNDO_COMMAND"], ()=>{
                announce(undone.peek());
                return false;
            }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["REDO_COMMAND"], ()=>{
                announce(redone.peek());
                return false;
            }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"])));
    }
};
/**
 * Platform-independent extension that announces
 * `editor.setEditable(true|false)` transitions through the
 * `AriaLiveRegionExtension`'s shared sink.
 */ const EditorModeAnnounceExtension = {
    build: (_editor, config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["namedSignals"])(config),
    config: {
        disabled: false,
        editable: 'Editor is editable',
        readOnly: 'Editor is read-only'
    },
    dependencies: [
        AriaLiveRegionExtension
    ],
    name: '@lexical/a11y/EditorModeAnnounce',
    register (editor, _config, state) {
        const { disabled, editable, readOnly } = state.getOutput();
        const { announce } = state.getDependency(AriaLiveRegionExtension).output;
        // Gate registration on `disabled` from an effect so a disabled announcer
        // adds no listener overhead. Peek the message signals at dispatch time so
        // changing them doesn't re-register.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>disabled.value ? undefined : editor.registerEditableListener((isEditable)=>{
                announce(isEditable ? editable.peek() : readOnly.peek());
            }));
    }
};
/**
 * The public output of the focus-trap, roving-tabindex and focus-manager
 * extensions: register a container (reference counted) and get back an
 * idempotent disposer. Callers register through this method instead of a
 * mutable map and never see the container bookkeeping. It is the core
 * {@link RefCountedRegistry} keyed by `HTMLElement`.
 *
 * Each extension creates the registry in `build` (where the editor is
 * available for the per-container activation) and disposes it on `register`
 * teardown via {@link RefCountedRegistry.dispose}.
 */ /**
 * Platform-independent extension that traps Tab / Shift+Tab focus inside one
 * or more containers. Register a container through the extension output
 * ({@link ContainerRegistry.register}); the React adapter is
 * `useLexicalFocusTrapRef` from `@lexical/react`.
 */ const FocusTrapExtension = {
    build: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRefCountedRegistry"])(registerFocusTrap),
    name: '@lexical/a11y/FocusTrap',
    register: (_editor, _config, state)=>()=>state.getOutput().dispose()
};
/**
 * Platform-independent extension that wires the WAI-ARIA roving-tabindex
 * pattern on one or more containers. Register a container through the
 * extension output ({@link ContainerRegistry.register}); the React adapter is
 * `useLexicalRovingTabIndexRef` from `@lexical/react`.
 */ const RovingTabIndexExtension = {
    build: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRefCountedRegistry"])(registerRovingTabIndex),
    name: '@lexical/a11y/RovingTabIndex',
    register: (_editor, _config, state)=>()=>state.getOutput().dispose()
};
/**
 * Platform-independent extension that wires the editor-to-toolbar focus jump
 * (Alt+F10 / Escape return) on one or more toolbars. Register a toolbar
 * through the extension output ({@link ContainerRegistry.register}); the React
 * adapter is `useLexicalFocusManagerRef` from `@lexical/react`.
 */ const FocusManagerExtension = {
    build: (editor)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRefCountedRegistry"])((toolbar, options)=>registerFocusManager(editor, toolbar, options)),
    name: '@lexical/a11y/FocusManager',
    register: (_editor, _config, state)=>()=>state.getOutput().dispose()
};
;
}),
"[project]/node_modules/@lexical/clipboard/dist/LexicalClipboard.dev.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$exportMimeTypeFromSelection",
    ()=>$exportMimeTypeFromSelection,
    "$generateJSONFromSelectedNodes",
    ()=>$generateJSONFromSelectedNodes,
    "$generateNodesFromSerializedNodes",
    ()=>$generateNodesFromSerializedNodes,
    "$getClipboardDataFromSelection",
    ()=>$getClipboardDataFromSelection,
    "$getHtmlContent",
    ()=>$getHtmlContent,
    "$getLexicalContent",
    ()=>$getLexicalContent,
    "$handlePlainTextDrop",
    ()=>$handlePlainTextDrop,
    "$handleRichTextDrop",
    ()=>$handleRichTextDrop,
    "$insertDataTransferForPlainText",
    ()=>$insertDataTransferForPlainText,
    "$insertDataTransferForRichText",
    ()=>$insertDataTransferForRichText,
    "$insertGeneratedNodes",
    ()=>$insertGeneratedNodes,
    "$writeDragSourceToDataTransfer",
    ()=>$writeDragSourceToDataTransfer,
    "ClipboardDOMImportExtension",
    ()=>ClipboardDOMImportExtension,
    "ClipboardImportExtension",
    ()=>ClipboardImportExtension,
    "DEFAULT_IMPORT_MIME_TYPE",
    ()=>DEFAULT_IMPORT_MIME_TYPE,
    "DEFAULT_IMPORT_MIME_TYPE_PRIORITY",
    ()=>DEFAULT_IMPORT_MIME_TYPE_PRIORITY,
    "GetClipboardDataExtension",
    ()=>GetClipboardDataExtension,
    "caretFromPoint",
    ()=>caretFromPoint,
    "copyToClipboard",
    ()=>copyToClipboard,
    "setLexicalClipboardDataTransfer",
    ()=>setLexicalClipboardDataTransfer
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lexical/dist/Lexical.dev.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@lexical/extension/dist/LexicalExtension.dev.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@lexical/html/dist/LexicalHtml.dev.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@lexical/selection/dist/LexicalSelection.dev.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@lexical/utils/dist/LexicalUtils.dev.mjs [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // True when `node` is `rootElement` or a composed descendant of it, walking
// across shadow boundaries via getParentElement. A point retargeted to the
// shadow host resolves to an ancestor of rootElement, so it fails this check
// (the host is above rootElement, never below it).
function isWithinComposedTree(node, rootElement) {
    for(let current = node; current !== null;){
        if (current === rootElement) {
            return true;
        }
        current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParentElement"])(current);
    }
    return false;
}
// Find the closest caret position at (x, y) by walking text nodes under
// `container`. Two-phase: pick the nearest text node via getClientRects(),
// then scan offsets within that single node. Vertical-first comparison
// prevents cross-line mispicks on wrapped spans and RTL/bidi text.
// Not a hot path (runs once per drag-drop).
function findTextOffsetAtPoint(x, y, container, doc) {
    const range = doc.createRange();
    const vDist = (r)=>y < r.top ? r.top - y : y > r.bottom ? y - r.bottom : 0;
    const hDist = (r)=>x < r.left ? r.left - x : x > r.right ? x - r.right : 0;
    // Phase 1: pick the nearest text node via one getClientRects() per node
    // (each returns its per-line fragments) so phase 2 scans a single node.
    const walker = doc.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    let bestNode = null;
    let bestV = Infinity;
    let bestH = Infinity;
    for(let n = walker.nextNode(); n; n = walker.nextNode()){
        range.selectNodeContents(n);
        for (const r of range.getClientRects()){
            const v = vDist(r);
            const h = hDist(r);
            if (v < bestV || v === bestV && h < bestH) {
                bestV = v;
                bestH = h;
                bestNode = n;
            }
        }
    }
    if (bestNode === null) {
        return null;
    }
    // Phase 2: closest caret offset within that node, vertical-first again
    // (so LTR and RTL both land on the right line).
    let bestOffset = 0;
    let offV = Infinity;
    let offH = Infinity;
    for(let i = 0; i <= bestNode.length; i++){
        range.setStart(bestNode, i);
        range.collapse(true);
        const r = range.getBoundingClientRect();
        const v = vDist(r);
        const h = Math.abs(x - r.left);
        if (v < offV || v === offV && h < offH) {
            offV = v;
            offH = h;
            bestOffset = i;
        }
    }
    return {
        node: bestNode,
        offset: bestOffset
    };
}
/** @internal */ function caretFromPoint(x, y, rootElement = null) {
    const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRootOwnerDocument"])(rootElement);
    const shadowRoots = rootElement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDOMShadowRoots"])(rootElement) : [];
    const hasShadow = rootElement !== null && shadowRoots.length > 0;
    // caretPositionFromPoint with {shadowRoots} (Chrome 128+, Firefox 125+)
    // returns the un-retargeted node inside the shadow tree directly.
    if (hasShadow && typeof doc.caretPositionFromPoint === 'function') {
        const caretPosition = doc.caretPositionFromPoint(x, y, {
            shadowRoots
        });
        if (caretPosition !== null && isWithinComposedTree(caretPosition.offsetNode, rootElement)) {
            return {
                node: caretPosition.offsetNode,
                offset: caretPosition.offset
            };
        }
    }
    // Shadow fallback: caretRangeFromPoint retargets shadow-internal nodes
    // to the shadow host. Use shadowRoot.elementFromPoint to find the
    // correct element, then walk its text nodes to find the offset.
    // Also reached when caretPositionFromPoint exists but silently ignored
    // the {shadowRoots} option (older Chrome/Firefox).
    if (hasShadow) {
        const rootNode = rootElement.getRootNode();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDOMShadowRoot"])(rootNode)) {
            const element = rootNode.elementFromPoint(x, y);
            if (element !== null && rootElement.contains(element)) {
                const result = findTextOffsetAtPoint(x, y, element, doc);
                if (result !== null) {
                    return result;
                }
            }
        // The point missed the editor's shadow content (gutter/padding, slotted
        // content, or a sibling outside rootElement). Fall through to the legacy
        // caretRangeFromPoint path for a best-effort (host-level) caret rather
        // than dropping the interaction entirely.
        }
    }
    // Non-shadow path.
    if (typeof doc.caretRangeFromPoint === 'function') {
        const range = doc.caretRangeFromPoint(x, y);
        if (range === null) {
            return null;
        }
        return {
            node: range.startContainer,
            offset: range.startOffset
        };
    } else if (typeof doc.caretPositionFromPoint === 'function') {
        const caretPosition = doc.caretPositionFromPoint(x, y);
        if (caretPosition === null) {
            return null;
        }
        return {
            node: caretPosition.offsetNode,
            offset: caretPosition.offset
        };
    }
    return null;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Do not require this module directly! Use normal `invariant` calls.
function formatDevErrorMessage(message) {
    throw new Error(message);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * A middleware function in a per-MIME-type clipboard-import stack. Mirrors
 * the shape of {@link ExportMimeTypeFunction} on the export side.
 *
 * - `data` is the non-empty string returned by `DataTransfer.getData(mime)`
 *   for this MIME type.
 * - `selection` is the current editor selection at the insertion point.
 * - `$next` defers to the next-lower handler in the stack (i.e. the handler
 *   that was registered earlier). Returns `true` if that handler claimed
 *   the data; `false` if no handler accepted it.
 * - `dataTransfer` is the full {@link DataTransfer} the paste/drop came
 *   from, so a handler can inspect companion MIME types or attached
 *   files in addition to the slot it was invoked for (e.g. peek at
 *   `'application/x-vscode-source'` while handling `'text/html'`). When
 *   threading through the new pipeline, pass this into
 *   `$generateNodesFromDOMViaExtension(dom, {
 *     context: [contextValue(ImportSourceDataTransfer, dataTransfer)],
 *   })` so rules and preprocessors can read it via
 *   `ctx.get(ImportSourceDataTransfer)`.
 *
 * The function should return `true` if it consumed the data (the caller
 * stops trying further handlers for this MIME type and does not move on to
 * the next MIME type). Return `$next()` to delegate. Return `false` if the
 * function decided not to handle the data after inspecting it (e.g. the
 * JSON namespace didn't match) so a lower-priority handler — or the next
 * MIME type — gets a chance.
 *
 * @experimental
 */ /**
 * A mapping from MIME type to a stack of {@link ImportMimeTypeFunction}.
 *
 * Each entry is an ordered array; the function at the highest index runs
 * first and may call `next()` to fall through to the function below it.
 * The default config provides one handler each for
 * `'application/x-lexical-editor'`, `'text/html'`, and `'text/plain'` that
 * matches the legacy {@link $insertDataTransferForRichText} behavior.
 *
 * When {@link ClipboardImportExtension} merges a partial config, new
 * functions are appended to the existing array for each MIME type, so
 * later-registered handlers run before earlier ones (including the
 * defaults) and may delegate to them via `next()`.
 *
 * @experimental
 */ /**
 * Per-MIME-type ordering weights. Lower numbers run first.
 *
 * Composable across extensions: each extension contributes weights for
 * its MIME types without needing to coordinate. A partial config that
 * sets `{'application/vnd.myapp+json': 5}` slots its type between the
 * built-in `application/x-lexical-editor` (0) and `text/html` (10) — no
 * need to enumerate the full ordering. mergeConfig spreads pairs (later
 * keys override earlier ones for the same MIME type, so an extension
 * can also re-rank a built-in by repeating its key with a new weight).
 *
 * Iteration: every MIME type that has a handler stack and is present in
 * the dataTransfer (regardless of whether it has an explicit weight) is
 * tried; MIME types with no explicit weight sort to the end, behind all
 * weighted ones, in lexical order.
 *
 * @experimental
 */ /**
 * Configuration for {@link ClipboardImportExtension}.
 *
 * @experimental
 */ /**
 * Default per-MIME-type weights reproducing the legacy
 * `$insertDataTransferForRichText` ordering:
 *
 * `application/x-lexical-editor` (0) → `text/html` (10) →
 * `text/plain` (20) → `text/uri-list` (30).
 *
 * Gaps between weights let third-party MIME types slot in (e.g. weight
 * 5 to run between lexical and html). Apps can also override built-in
 * weights to demote them.
 *
 * @experimental
 */ const DEFAULT_IMPORT_MIME_TYPE_PRIORITY = {
    'application/x-lexical-editor': 0,
    'text/html': 10,
    'text/plain': 20,
    'text/uri-list': 30
};
function trustHTML(html) {
    // eslint-disable-next-line no-restricted-syntax
    if (window.trustedTypes && window.trustedTypes.createPolicy) {
        // eslint-disable-next-line no-restricted-syntax
        const policy = window.trustedTypes.createPolicy('lexical', {
            createHTML: (input)=>input
        });
        return policy.createHTML(html);
    }
    return html;
}
/**
 * Default handler for `'application/x-lexical-editor'`: parse the JSON,
 * verify the namespace, and insert the serialized nodes.
 */ const $defaultLexicalEditorImporter = (data, selection, $next)=>{
    try {
        const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getEditor"])();
        const payload = JSON.parse(data);
        if (payload && payload.namespace === editor._config.namespace && Array.isArray(payload.nodes)) {
            const nodes = $generateNodesFromSerializedNodes(payload.nodes);
            $insertGeneratedNodes(editor, nodes, selection);
            return true;
        }
    } catch (error) {
        console.error(error);
    }
    return $next();
};
/**
 * Default handler for `'text/html'`: parse the HTML and run the legacy
 * `$generateNodesFromDOM`. Override (or stack a higher-priority handler
 * on top) to route HTML pastes through {@link DOMImportExtension} or any
 * custom pipeline. See {@link $generateNodesFromDOMViaExtension} for the
 * built-in `DOMImportExtension` adapter.
 */ const $defaultHtmlImporter = (data, selection, $next)=>{
    try {
        const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getEditor"])();
        const parser = new DOMParser();
        const dom = parser.parseFromString(trustHTML(data), 'text/html');
        const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$generateNodesFromDOM"])(editor, dom);
        $insertGeneratedNodes(editor, nodes, selection);
        return true;
    } catch (error) {
        console.error(error);
        return $next();
    }
};
/**
 * Default handler for `'text/plain'`. On a RangeSelection, drive the
 * insertion off {@link tokenizeRawText} so each `\n` becomes a real
 * paragraph break via `insertParagraph` (preserving current text
 * format / style on the surrounding `insertText` calls). For other
 * selection types, defer to the selection's own `insertRawText`.
 */ const $defaultPlainTextImporter = (data, selection)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
        selection.insertRawText(data);
        return true;
    }
    // Each insertion below reports the caret position that follows it by
    // writing to the editor's selection — a node replacement can even swap
    // the selection object outright (#5954) — so the loop has to re-read
    // $getSelection() between tokens instead of holding a reference that
    // goes stale after the first one. Honoring a caller-supplied selection
    // (#6278) therefore means promoting it to the editor's selection first;
    // otherwise every token lands wherever the editor happens to point.
    // Insertion leaves the selection after the inserted content, which is
    // what the text/html and application/x-lexical-editor handlers already
    // do via $insertGeneratedNodes.
    if (selection !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setSelection"])(selection);
    }
    const withCurrentRange = (fn)=>{
        const cur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(cur)) {
            fn(cur);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tokenizeRawText"])(data, {
        linebreak: ()=>withCurrentRange((cur)=>cur.insertParagraph()),
        tab: ()=>withCurrentRange((cur)=>cur.insertNodes([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createTabNode"])()
                ])),
        text: (part)=>withCurrentRange((cur)=>cur.insertText(part))
    });
    return true;
};
/**
 * The default per-MIME-type handler stacks reproducing the legacy
 * {@link $insertDataTransferForRichText} behavior exactly. Stacked
 * extensions append on top of these.
 *
 * @experimental
 */ const DEFAULT_IMPORT_MIME_TYPE = {
    'application/x-lexical-editor': [
        $defaultLexicalEditorImporter
    ],
    'text/html': [
        $defaultHtmlImporter
    ],
    'text/plain': [
        $defaultPlainTextImporter
    ],
    // `text/uri-list` is a Webkit-only payload that drops behave-like text;
    // reuse the plain-text handler so a URL drop on a rich-text editor
    // inserts as plain text rather than being ignored.
    'text/uri-list': [
        $defaultPlainTextImporter
    ]
};
/**
 * Output of {@link ClipboardImportExtension}: the merged configuration
 * plus a self-contained {@link $insertDataTransfer} function that owns
 * the entire paste-side iteration over the priority list. Apps look this
 * up via peer-dependency and call it directly; {@link
 * $insertDataTransferForRichText} delegates to it.
 *
 * @experimental
 */ function $callImportMimeTypeFunctionStack(fns, data, selection, dataTransfer) {
    if (!fns) {
        return false;
    }
    const callAt = (i)=>fns[i] ? fns[i](data, selection, callAt.bind(null, i - 1), dataTransfer) : false;
    return callAt(fns.length - 1);
}
/**
 * Sort the MIME types that have a registered handler stack by their
 * configured priority weight (ascending). Types with no explicit weight
 * sort after all weighted types, in lexical order, so unknown types
 * remain reachable but never preempt a known one.
 */ function orderedMimeTypes(config) {
    const mimes = Object.keys(config.$importMimeType).filter((k)=>config.$importMimeType[k] !== undefined);
    return mimes.sort((a, b)=>{
        const wa = config.priority[a];
        const wb = config.priority[b];
        if (wa === undefined && wb === undefined) {
            return a < b ? -1 : a > b ? 1 : 0;
        }
        if (wa === undefined) {
            return 1;
        }
        if (wb === undefined) {
            return -1;
        }
        return wa - wb;
    });
}
function $runImport(config, dataTransfer, selection) {
    // Read once for the iOS Safari heuristic that skips text/html when it
    // matches text/plain verbatim (iOS Safari autocorrect produces a
    // text/html payload identical to the plain text).
    const plainString = dataTransfer.getData('text/plain');
    for (const mime of orderedMimeTypes(config)){
        const data = dataTransfer.getData(mime);
        if (!data) {
            continue;
        }
        if (mime === 'text/html' && data === plainString) {
            continue;
        }
        if ($callImportMimeTypeFunctionStack(config.$importMimeType[mime], data, selection, dataTransfer)) {
            return true;
        }
    }
    return false;
}
const DEFAULT_OUTPUT = {
    $importMimeType: DEFAULT_IMPORT_MIME_TYPE,
    $insertDataTransfer: (dataTransfer, selection)=>$runImport({
            $importMimeType: DEFAULT_IMPORT_MIME_TYPE,
            priority: DEFAULT_IMPORT_MIME_TYPE_PRIORITY
        }, dataTransfer, selection),
    priority: DEFAULT_IMPORT_MIME_TYPE_PRIORITY
};
/**
 * @internal
 *
 * Look up the {@link ClipboardImportOutput} on the active editor. Returns
 * a static default-backed output when no {@link ClipboardImportExtension}
 * is configured, so callers can always invoke `output.$insertDataTransfer`
 * regardless of whether the editor opted in.
 */ function $getImportOutput() {
    const dep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$getPeerDependency"])(ClipboardImportExtension.name);
    return dep ? dep.output : DEFAULT_OUTPUT;
}
/**
 * @experimental
 *
 * Mirror of {@link GetClipboardDataExtension} for the import direction.
 * Holds a per-MIME-type stack of {@link ImportMimeTypeFunction}s.
 *
 * @example
 * Route `text/html` pastes through {@link DOMImportExtension}, leaving the
 * defaults for other MIME types untouched:
 * ```ts
 * import {configExtension, defineExtension, $getEditor} from 'lexical';
 * import {
 *   ClipboardImportExtension,
 *   $insertGeneratedNodes,
 * } from '@lexical/clipboard';
 * import {
 *   contextValue,
 *   DOMImportExtension,
 *   ImportSource,
 *   ImportSourceDataTransfer,
 *   $generateNodesFromDOMViaExtension,
 * } from '@lexical/html';
 *
 * defineExtension({
 *   name: 'app',
 *   dependencies: [
 *     DOMImportExtension,
 *     configExtension(ClipboardImportExtension, {
 *       $importMimeType: {
 *         'text/html': [
 *           (html, selection, _$next, dataTransfer) => {
 *             const parser = new DOMParser();
 *             const dom = parser.parseFromString(html, 'text/html');
 *             const nodes = $generateNodesFromDOMViaExtension(dom, {
 *               context: [
 *                 contextValue(ImportSource, 'paste'),
 *                 contextValue(ImportSourceDataTransfer, dataTransfer),
 *               ],
 *             });
 *             $insertGeneratedNodes($getEditor(), nodes, selection);
 *             return true;
 *           },
 *         ],
 *       },
 *     }),
 *   ],
 * });
 * ```
 */ const ClipboardImportExtension = {
    build: (_editor, config)=>({
            $importMimeType: config.$importMimeType,
            $insertDataTransfer: (dataTransfer, selection)=>$runImport(config, dataTransfer, selection),
            priority: config.priority
        }),
    config: {
        $importMimeType: DEFAULT_IMPORT_MIME_TYPE,
        priority: DEFAULT_IMPORT_MIME_TYPE_PRIORITY
    },
    mergeConfig (config, partial) {
        const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shallowMergeConfig"])(config, partial);
        if (partial.$importMimeType) {
            const $importMimeType = {
                ...config.$importMimeType
            };
            for (const [k, v] of Object.entries(partial.$importMimeType)){
                if (v) {
                    const prev = $importMimeType[k];
                    $importMimeType[k] = prev ? [
                        ...prev,
                        ...v
                    ] : v;
                }
            }
            merged.$importMimeType = $importMimeType;
        }
        if (partial.priority) {
            // Spread-merge weights. Per-MIME-type keys in `partial` override
            // any matching key in `config` (so an extension can rerank a
            // built-in MIME type) and new keys are simply added (so multiple
            // extensions can each contribute their own MIME types without
            // having to coordinate).
            merged.priority = {
                ...config.priority,
                ...partial.priority
            };
        }
        return merged;
    },
    name: '@lexical/clipboard/Import'
};
/**
 * @experimental
 *
 * Drop-in extension that routes `text/html` clipboard pastes and drops
 * through the {@link DOMImportExtension} pipeline (rules, schemas,
 * preprocessors, overlays) instead of the legacy
 * {@link $generateNodesFromDOM}. Node-providing extensions
 * (`RichTextExtension`, `ListExtension`, `LinkExtension`,
 * `TableExtension`, `CodeExtension`, …) register their own import rules,
 * so adding this extension to an editor built from them is all it takes
 * to activate the pipeline for pastes. {@link CoreImportExtension} (the
 * paragraph/text/inline-format baseline) is a dependency of this
 * extension, so even an editor with no rule-contributing node extensions
 * gets sensible text handling.
 *
 * The original {@link DataTransfer} and `'paste'` source kind are forwarded
 * into the import context so rules and preprocessors can read them via
 * `ctx.get(ImportSourceDataTransfer)` / `ctx.get(ImportSource)`.
 *
 * Equivalent to stacking this `text/html` handler manually via
 * `configExtension(ClipboardImportExtension, {...})`.
 *
 * @example
 * ```ts
 * import {defineExtension} from 'lexical';
 * import {ClipboardDOMImportExtension} from '@lexical/clipboard';
 * import {RichTextExtension} from '@lexical/rich-text';
 *
 * defineExtension({
 *   name: 'app',
 *   dependencies: [
 *     RichTextExtension,
 *     ClipboardDOMImportExtension,
 *   ],
 * });
 * ```
 */ const ClipboardDOMImportExtension = {
    dependencies: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CoreImportExtension"],
        [
            ClipboardImportExtension,
            {
                $importMimeType: {
                    'text/html': [
                        (html, selection, _$next, dataTransfer)=>{
                            const parser = new DOMParser();
                            const dom = parser.parseFromString(trustHTML(html), 'text/html');
                            const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$generateNodesFromDOMViaExtension"])(dom, {
                                context: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contextValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImportSource"], 'paste'),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contextValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImportSourceDataTransfer"], dataTransfer)
                                ]
                            });
                            $insertGeneratedNodes((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getEditor"])(), nodes, selection);
                            return true;
                        }
                    ]
                }
            }
        ]
    ],
    name: '@lexical/clipboard/DOMImport'
};
/**
 * Returns the *currently selected* Lexical content as an HTML string, relying on the
 * logic defined in the exportDOM methods on the LexicalNode classes. Note that
 * this will not return the HTML content of the entire editor (unless all the content is included
 * in the current selection).
 *
 * @param editor - LexicalEditor instance to get HTML content from
 * @param selection - The selection to use (default is $getSelection())
 * @returns a string of HTML content
 */ function $getHtmlContent(editor, selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])()) {
    if (selection == null) {
        {
            formatDevErrorMessage(`Expected valid LexicalSelection`);
        }
    }
    // If we haven't selected anything
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.isCollapsed() || selection.getNodes().length === 0) {
        return '';
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$generateHtmlFromNodes"])(editor, selection);
}
/**
 * Returns the *currently selected* Lexical content as a JSON string, relying on the
 * logic defined in the exportJSON methods on the LexicalNode classes. Note that
 * this will not return the JSON content of the entire editor (unless all the content is included
 * in the current selection).
 *
 * @param editor  - LexicalEditor instance to get the JSON content from
 * @param selection - The selection to use (default is $getSelection())
 * @returns
 */ function $getLexicalContent(editor, selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])()) {
    if (selection == null) {
        {
            formatDevErrorMessage(`Expected valid LexicalSelection`);
        }
    }
    // If we haven't selected anything
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.isCollapsed() || selection.getNodes().length === 0) {
        return null;
    }
    return JSON.stringify($generateJSONFromSelectedNodes(editor, selection));
}
/**
 * Attempts to insert content of the mime-types text/plain or text/uri-list from
 * the provided DataTransfer object into the editor at the provided selection.
 * text/uri-list is only used if text/plain is not also provided.
 *
 * @param dataTransfer an object conforming to the [DataTransfer interface] (https://html.spec.whatwg.org/multipage/dnd.html#the-datatransfer-interface)
 * @param selection the selection to use as the insertion point for the content in the DataTransfer object
 */ function $insertDataTransferForPlainText(dataTransfer, selection) {
    const text = dataTransfer.getData('text/plain') || dataTransfer.getData('text/uri-list');
    if (text != null) {
        selection.insertRawText(text);
    }
}
/**
 * Insert the contents of `dataTransfer` at `selection` using the rich-text
 * import pipeline (`application/x-lexical-editor` → `text/html` → `text/plain`
 * → `text/uri-list`, in descending order of priority).
 *
 * Every payload type leaves the editor's selection after the inserted content,
 * so `selection` must be a live selection this update may write to — the one
 * from `$getSelection()`, or one built with `$createRangeSelection()`. Passing
 * a selection read out of an already-committed EditorState is not supported and
 * raises an invariant in development builds.
 *
 * @param dataTransfer an object conforming to the [DataTransfer interface] (https://html.spec.whatwg.org/multipage/dnd.html#the-datatransfer-interface)
 * @param selection the selection to use as the insertion point for the content in the DataTransfer object
 * @param _editor unused; retained for backwards compatibility. Safe to
 *   omit on new call sites.
 */ function $insertDataTransferForRichText(dataTransfer, selection, _editor) {
    $getImportOutput().$insertDataTransfer(dataTransfer, selection);
}
const LEXICAL_DRAG_MIME_TYPE = 'application/x-lexical-drag';
/**
 * Populate `dataTransfer` with a marker identifying the current editor as a
 * drag source. Pair this with {@link $handleRichTextDrop} or
 * {@link $handlePlainTextDrop} on the drop side to get cut-and-paste semantics
 * for drags that end in a different editor.
 *
 * Only the source editor's key needs to round-trip — the source's
 * RangeSelection itself is preserved on the source editor between drag start
 * and drop (Lexical suppresses selectionchange during drag), so the drop
 * handler reads it directly via `$getSelection()` on the resolved source
 * editor.
 *
 * Callers typically invoke this from a DRAGSTART_COMMAND handler alongside
 * {@link setLexicalClipboardDataTransfer} (so that the dragged content itself
 * round-trips with full node fidelity).
 */ function $writeDragSourceToDataTransfer(dataTransfer, editor) {
    const marker = {
        editorKey: editor.getKey()
    };
    dataTransfer.setData(LEXICAL_DRAG_MIME_TYPE, JSON.stringify(marker));
}
function isLexicalDragMarker(value) {
    return value !== null && typeof value === 'object' && 'editorKey' in value && typeof value.editorKey === 'string';
}
function readDragMarker(dataTransfer) {
    const raw = dataTransfer.getData(LEXICAL_DRAG_MIME_TYPE);
    if (!raw) {
        return null;
    }
    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch (_unused) {
        return null;
    }
    return isLexicalDragMarker(parsed) ? parsed : null;
}
function findEditorRootByKey(key, doc) {
    for (const el of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findAllLexicalElementsDeep"])(doc)){
        const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEditorPropertyFromDOMNode"])(el);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLexicalEditor"])(editor) && editor.getKey() === key && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTMLElement"])(el)) {
            return el;
        }
    }
    return null;
}
function $resolveDropPointCaret(event, editor) {
    const hit = caretFromPoint(event.clientX, event.clientY, editor.getRootElement());
    if (hit === null) {
        return null;
    }
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(hit.node);
    if (node === null) {
        return null;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(node)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getTextPointCaret"])(node, 'next', hit.offset);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getChildCaretAtIndex"])(node, hit.offset, 'next');
    }
    const parent = node.getParent();
    if (parent === null) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getChildCaretAtIndex"])(parent, node.getIndexWithinParent() + 1, 'next');
}
function $isDropCaretInsideSelection(dropCaret, selection) {
    const { anchor: start, focus: end } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCaretRangeInDirection"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$caretRangeFromSelection"])(selection), 'next');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$comparePointCaretNext"])(start, dropCaret) < 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$comparePointCaretNext"])(dropCaret, end) < 0;
}
function $doDrop(event, editor, $insertDataTransfer) {
    const dataTransfer = event.dataTransfer;
    if (dataTransfer === null) {
        return false;
    }
    // Drags that didn't originate in a Lexical editor (no marker) fall through
    // to the browser's native drag-and-drop flow; its beforeinput
    // insertFromDrop is already handled correctly by Lexical's existing
    // beforeinput logic.
    const marker = readDragMarker(dataTransfer);
    if (marker === null) {
        return false;
    }
    const dropCaret = $resolveDropPointCaret(event, editor);
    if (dropCaret === null) {
        return false;
    }
    // Split at the drop caret so we have a stable NodeCaret boundary that
    // survives text-content mutations in its siblings.
    const stableDropCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$splitAtPointCaretNext"])(dropCaret);
    if (stableDropCaret === null) {
        return false;
    }
    const isSameEditorDrag = marker.editorKey === editor.getKey();
    const currentSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
    if (isSameEditorDrag) {
        // Same-editor drag: the destination's $getSelection() is the still-
        // selected dragged range, so Lexical's beforeinput handler would skip
        // applyDOMRange and route the insert to the source's location instead
        // of the drop point. Remove the dragged range ourselves, then insert
        // at the stable drop caret.
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(currentSelection) || currentSelection.isCollapsed()) {
            return false;
        }
        if ($isDropCaretInsideSelection(dropCaret, currentSelection)) {
            event.preventDefault();
            return true;
        }
        currentSelection.removeText();
    }
    // If the drop caret's origin was swept away by the source removal, abort —
    // this can happen on a same-editor drag whose range covered the entire
    // text node we tried to split at.
    if (!stableDropCaret.origin.isAttached()) {
        event.preventDefault();
        return true;
    }
    const dropSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setSelectionFromCaretRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCollapsedCaretRange"])(stableDropCaret));
    $insertDataTransfer(dataTransfer, dropSelection, editor);
    if (!isSameEditorDrag) {
        // Cross-editor drag. The native drag-out deletion that the browser
        // would normally fire (beforeinput deleteByDrag on the source) isn't
        // reliable when the source is a nested contenteditable of the
        // destination (e.g. an image caption inside the main editor), so we
        // dispatch it ourselves at the source editor's root. The source
        // editor's own beforeinput handler runs the deletion through its own
        // REMOVE_TEXT_COMMAND and SKIP_SELECTION_FOCUS_TAG path.
        const rootElement = editor.getRootElement();
        const doc = rootElement ? rootElement.ownerDocument : null;
        const sourceRoot = doc ? findEditorRootByKey(marker.editorKey, doc) : null;
        if (sourceRoot !== null) {
            sourceRoot.dispatchEvent(new InputEvent('beforeinput', {
                bubbles: true,
                cancelable: true,
                inputType: 'deleteByDrag'
            }));
        }
    }
    event.preventDefault();
    return true;
}
/**
 * Drop handler for rich-text editors. Inserts the DataTransfer payload via
 * {@link $insertDataTransferForRichText} at the drop caret and, when the drag
 * originated from a Lexical editor (marked via
 * {@link $writeDragSourceToDataTransfer} on DRAGSTART), removes the source
 * range — producing cut-and-paste semantics whether the drop is in the same
 * editor or a different one on the same page.
 */ function $handleRichTextDrop(event, editor) {
    return $doDrop(event, editor, $insertDataTransferForRichText);
}
/**
 * Drop handler for plain-text editors. Same semantics as
 * {@link $handleRichTextDrop} but inserts via
 * {@link $insertDataTransferForPlainText}.
 */ function $handlePlainTextDrop(event, editor) {
    return $doDrop(event, editor, (dataTransfer, selection)=>$insertDataTransferForPlainText(dataTransfer, selection));
}
/**
 * Inserts Lexical nodes into the editor using different strategies depending on
 * some simple selection-based heuristics. If you're looking for a generic way to
 * to insert nodes into the editor at a specific selection point, you probably want
 * {@link lexical.$insertNodes}
 *
 * @param editor LexicalEditor instance to insert the nodes into.
 * @param nodes The nodes to insert.
 * @param selection The selection to insert the nodes into.
 */ function $insertGeneratedNodes(editor, nodes, selection) {
    if (!editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"], {
        nodes,
        selection
    })) {
        selection.insertNodes(nodes);
        $updateSelectionOnInsert(selection);
    }
    return;
}
function $updateSelectionOnInsert(selection) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.isCollapsed()) {
        const anchor = selection.anchor;
        let nodeToInspect = null;
        const anchorCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$caretFromPoint"])(anchor, 'previous');
        if (anchorCaret) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextPointCaret"])(anchorCaret)) {
                nodeToInspect = anchorCaret.origin;
            } else {
                const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCaretRange"])(anchorCaret, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getChildCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getRoot"])(), 'next').getFlipped());
                for (const caret of range){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(caret.origin)) {
                        nodeToInspect = caret.origin;
                        break;
                    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(caret.origin) && !caret.origin.isInline()) {
                        break;
                    }
                }
            }
        }
        if (nodeToInspect && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(nodeToInspect)) {
            const newFormat = nodeToInspect.getFormat();
            const newStyle = nodeToInspect.getStyle();
            if (selection.format !== newFormat || selection.style !== newStyle) {
                selection.format = newFormat;
                selection.style = newStyle;
                selection.dirty = true;
            }
        }
    }
}
function exportNodeToJSON(node) {
    const serializedNode = node.exportJSON();
    const nodeClass = node.constructor;
    if (serializedNode.type !== nodeClass.getType()) {
        {
            formatDevErrorMessage(`LexicalNode: Node ${nodeClass.name} does not implement .exportJSON().`);
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
        const serializedChildren = serializedNode.children;
        if (!Array.isArray(serializedChildren)) {
            {
                formatDevErrorMessage(`LexicalNode: Node ${nodeClass.name} is an element but .exportJSON() does not have a children array.`);
            }
        }
    }
    return serializedNode;
}
function $appendNodesToJSON(editor, selection, currentNode, targetArray = []) {
    let shouldInclude = selection !== null ? currentNode.isSelected(selection) : true;
    // 'clone', not 'html': this builds the internal
    // `application/x-lexical-editor` payload, the same destination the
    // $sliceSelectedTextNodeContent and extractWithChild calls below already
    // pass. Asking with 'html' dropped nodes that opt out of HTML export while
    // asking to survive a clone (e.g. MarkNode).
    const shouldExclude = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode) && currentNode.excludeFromCopy('clone');
    let target = currentNode;
    if (selection !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(target)) {
        target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$sliceSelectedTextNodeContent"])(selection, target, 'clone');
    }
    const children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(target) ? target.getChildren() : [];
    const serializedNode = exportNodeToJSON(target);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(target) && target.getTextContentSize() === 0) {
        // If an uncollapsed selection ends or starts at the end of a line of specialized,
        // TextNodes, such as code tokens, we will get a 'blank' TextNode here, i.e., one
        // with text of length 0. We don't want this, it makes a confusing mess. Reset!
        shouldInclude = false;
    }
    // An element host in a NodeSelection (e.g. a Card promoted whole-host by a
    // chrome click) recurses into its children with a null selection so the
    // whole subtree serializes even when none of the children are in the outer
    // selection themselves — the old shell-only output made cut silently lossy.
    // Only a whole-host NodeSelection promotes: a partial RangeSelection that
    // happens to contain the host must keep slicing/excluding per child, or a
    // drag into the host's interior would over-export unselected content.
    const childSelection = shouldInclude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode) ? null : selection;
    for(let i = 0; i < children.length; i++){
        const childNode = children[i];
        const shouldIncludeChild = $appendNodesToJSON(editor, childSelection, childNode, serializedNode.children);
        if (!shouldInclude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode) && shouldIncludeChild && currentNode.extractWithChild(childNode, selection, 'clone')) {
            shouldInclude = true;
        }
    }
    // Slots are shadow-root isolated, so they can't be partially selected by a
    // RangeSelection — when the host is included, each slot subtree is copied
    // whole. Pass a null selection to deep-export the slot regardless of the
    // outer selection, mirroring the EditorState slot serialization. Gate on the
    // same condition as the push below (and as the HTML exporter): only emit
    // slots for a host that is itself emitted, so a host outside the selection
    // is never walked — its slots must not influence (or break) this export.
    if (shouldInclude && !shouldExclude) {
        const slotNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSlotNames"])(target);
        if (slotNames.length > 0) {
            const serializedSlots = {};
            for (const name of slotNames){
                const slotNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSlot"])(target, name);
                if (!(slotNode !== null)) {
                    formatDevErrorMessage(`LexicalNode: Node ${target.constructor.name} has slot "${name}" but it resolved to no node during export.`);
                }
                const slotArray = [];
                $appendNodesToJSON(editor, null, slotNode, slotArray);
                // A whole-slot export must serialize to exactly the slot node. A slot
                // value that overrides excludeFromCopy would otherwise make
                // $appendNodesToJSON splice up its children (or emit nothing), leaving
                // a dangling/undefined slot entry that breaks on paste.
                if (!(slotArray.length === 1 && slotArray[0].type === slotNode.getType())) {
                    formatDevErrorMessage(`LexicalNode: slot "${name}" on ${target.constructor.name} did not serialize to exactly the slot value node (got ${String(slotArray.length)} of type ${String(slotArray.length > 0 ? slotArray[0].type : 'none')}); a slot value must not be excluded from copy.`);
                }
                serializedSlots[name] = slotArray[0];
            }
            serializedNode.$slots = serializedSlots;
        }
    }
    if (shouldInclude && !shouldExclude) {
        targetArray.push(serializedNode);
    } else if (Array.isArray(serializedNode.children)) {
        for(let i = 0; i < serializedNode.children.length; i++){
            const serializedChildNode = serializedNode.children[i];
            targetArray.push(serializedChildNode);
        }
    }
    return shouldInclude;
}
// TODO why $ function with Editor instance?
/**
 * Gets the Lexical JSON of the nodes inside the provided Selection.
 *
 * @param editor LexicalEditor to get the JSON content from.
 * @param selection Selection to get the JSON content from.
 * @returns an object with the editor namespace and a list of serializable nodes as JavaScript objects.
 */ function $generateJSONFromSelectedNodes(editor, selection) {
    const nodes = [];
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getRoot"])();
    // A selection wholly inside a slot subtree never includes its host (slots
    // are shadow-root isolated), so a root-children walk would miss the
    // selected nodes entirely and export an empty payload (cut = data loss).
    // Walk the selection's slot frame instead; outside slots this is the root.
    // $generateDOMFromNodes in @lexical/html redirects the text/html channel
    // through the same frame, so the two clipboard payloads stay in agreement.
    const slotFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelectionSlotFrame"])(selection);
    const topLevelChildren = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(slotFrame) ? slotFrame : root).getChildren();
    for(let i = 0; i < topLevelChildren.length; i++){
        const topLevelNode = topLevelChildren[i];
        $appendNodesToJSON(editor, selection, topLevelNode, nodes);
    }
    return {
        namespace: editor._config.namespace,
        nodes
    };
}
/**
 * This method takes an array of objects conforming to the BaseSerializedNode interface and returns
 * an Array containing instances of the corresponding LexicalNode classes registered on the editor.
 * Normally, you'd get an Array of BaseSerialized nodes from {@link $generateJSONFromSelectedNodes}
 *
 * @param serializedNodes an Array of objects conforming to the BaseSerializedNode interface.
 * @returns an Array of Lexical Node objects.
 */ function $generateNodesFromSerializedNodes(serializedNodes) {
    const nodes = [];
    for (const serializedNode of serializedNodes){
        nodes.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$parseSerializedNode"])(serializedNode));
    }
    return nodes;
}
const EVENT_LATENCY = 50;
let clipboardEventTimeout = null;
// TODO custom selection
// TODO potentially have a node customizable version for plain text
/**
 * Copies the content of the current selection to the clipboard in
 * text/plain, text/html, and application/x-lexical-editor (Lexical JSON)
 * formats.
 *
 * @param editor the LexicalEditor instance to copy content from
 * @param event the native browser ClipboardEvent to add the content to.
 * @returns
 */ async function copyToClipboard(editor, event, data) {
    if (clipboardEventTimeout !== null) {
        // Prevent weird race conditions that can happen when this function is run multiple times
        // synchronously. In the future, we can do better, we can cancel/override the previously running job.
        return false;
    }
    if (event !== null) {
        return new Promise((resolve, reject)=>{
            editor.update(()=>{
                resolve($copyToClipboardEvent(editor, event, data));
            });
        });
    }
    const rootElement = editor.getRootElement();
    const editorWindow = editor._window || window;
    const windowDocument = editorWindow.document;
    const domSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDOMSelection"])(editorWindow);
    if (rootElement === null || domSelection === null) {
        return false;
    }
    const element = windowDocument.createElement('span');
    element.style.position = 'fixed';
    element.style.top = '-1000px';
    element.append(windowDocument.createTextNode('#'));
    rootElement.append(element);
    const range = windowDocument.createRange();
    range.setStart(element, 0);
    range.setEnd(element, 1);
    domSelection.removeAllRanges();
    domSelection.addRange(range);
    return new Promise((resolve, reject)=>{
        const removeListener = editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COPY_COMMAND"], (secondEvent)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(secondEvent, ClipboardEvent)) {
                removeListener();
                if (clipboardEventTimeout !== null) {
                    editorWindow.clearTimeout(clipboardEventTimeout);
                    clipboardEventTimeout = null;
                }
                resolve($copyToClipboardEvent(editor, secondEvent, data));
            }
            // Block the entire copy flow while we wait for the next ClipboardEvent
            return true;
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_CRITICAL"]);
        // If the above hack execCommand hack works, this timeout code should never fire. Otherwise,
        // the listener will be quickly freed so that the user can reuse it again
        clipboardEventTimeout = editorWindow.setTimeout(()=>{
            removeListener();
            clipboardEventTimeout = null;
            resolve(false);
        }, EVENT_LATENCY);
        windowDocument.execCommand('copy');
        element.remove();
    });
}
// TODO shouldn't pass editor (pass namespace directly)
function $copyToClipboardEvent(editor, event, data) {
    if (data === undefined) {
        const domSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDOMSelection"])(editor._window);
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!selection || selection.isCollapsed()) {
            return false;
        }
        if (!domSelection) {
            return false;
        }
        const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDOMSelectionPoints"])(domSelection, editor.getRootElement());
        const anchorDOM = points.anchorNode;
        const focusDOM = points.focusNode;
        if (anchorDOM !== null && focusDOM !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSelectionWithinEditor"])(editor, anchorDOM, focusDOM)) {
            return false;
        }
        data = $getClipboardDataFromSelection(selection);
    }
    event.preventDefault();
    const clipboardData = event.clipboardData;
    if (clipboardData === null) {
        return false;
    }
    setLexicalClipboardDataTransfer(clipboardData, data);
    return true;
}
const clipboardDataFunctions = [
    [
        'text/html',
        $getHtmlContent
    ],
    [
        'application/x-lexical-editor',
        $getLexicalContent
    ]
];
/**
 * Serialize the content of the current selection to strings in
 * text/plain, text/html, and application/x-lexical-editor (Lexical JSON)
 * formats (as available).
 *
 * @param selection the selection to serialize (defaults to $getSelection())
 * @returns LexicalClipboardData
 */ function $getClipboardDataFromSelection(selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])()) {
    return $getClipboardDataWithConfigFromSelection($getExportConfig(), selection);
}
/**
 * Call setData on the given clipboardData for each MIME type present
 * in the given data (from {@link $getClipboardDataFromSelection})
 *
 * @param clipboardData the event.clipboardData to populate from data
 * @param data The lexical data
 */ function setLexicalClipboardDataTransfer(clipboardData, data) {
    for (const [k] of clipboardDataFunctions){
        if (data[k] === undefined) {
            clipboardData.setData(k, '');
        }
    }
    for(const k in data){
        const v = data[k];
        if (v !== undefined) {
            clipboardData.setData(k, v);
        }
    }
}
/**
 * A function that produces the serialized representation of a selection for
 * a single MIME type. Functions are arranged in a stack per MIME type (see
 * {@link ExportMimeTypeConfig}); the function at the top of the stack is
 * invoked first and may call `next()` to delegate to the previous function
 * in the stack (typically the default Lexical serializer).
 *
 * Returning `null` from the top-most function omits that MIME type from the
 * resulting {@link LexicalClipboardData}.
 *
 * @param selection - The selection to serialize, or `null` if there is none.
 * @param next - Calls the previous handler in the stack and returns its
 *   result, or `null` if there is no previous handler.
 * @returns The serialized string for this MIME type, or `null` to omit it.
 */ /**
 * Configuration for {@link GetClipboardDataExtension}.
 */ /**
 * A mapping from MIME type to a stack of {@link ExportMimeTypeFunction}.
 *
 * Each entry is an ordered array; the function at the highest index runs
 * first and may call `next()` to fall through to the function below it.
 * The default config provides a single fallback handler for
 * `'application/x-lexical-editor'`, `'text/html'`, and `'text/plain'`.
 *
 * When {@link GetClipboardDataExtension} merges a partial config, new
 * functions are appended to the existing array for each MIME type, so
 * later-registered handlers run before earlier ones (including the
 * defaults) and may delegate to them via `next()`. To register a brand new
 * MIME type, supply a key not present in the default config; arbitrary
 * string keys are accepted in addition to the keys of
 * {@link LexicalClipboardData}.
 */ function $getExportConfig(editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getEditor"])()) {
    const dep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPeerDependencyFromEditor"])(editor, GetClipboardDataExtension.name);
    return dep ? dep.output : DEFAULT_EXPORT_MIME_TYPE;
}
const DEFAULT_EXPORT_MIME_TYPE = {
    'application/x-lexical-editor': [
        (sel, next)=>sel ? $getLexicalContent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getEditor"])(), sel) : next()
    ],
    'text/html': [
        (sel, next)=>sel ? $getHtmlContent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getEditor"])(), sel) : next()
    ],
    'text/plain': [
        (sel, next)=>sel ? sel.getTextContent() : next()
    ]
};
function $getClipboardDataWithConfigFromSelection($exportMimeType, selection) {
    const clipboardData = {
        'text/plain': ''
    };
    for (const [k, fns] of Object.entries($exportMimeType)){
        if (fns) {
            const v = callExportMimeTypeFunctionStack(fns, selection);
            if (v !== null) {
                clipboardData[k] = v;
            }
        }
    }
    return clipboardData;
}
function callExportMimeTypeFunctionStack(fns, selection) {
    const callAt = (i)=>fns[i] ? fns[i](selection, callAt.bind(null, i - 1)) : null;
    return callAt(fns.length - 1);
}
/**
 * Serialize the given selection for a single MIME type using the active
 * editor's configured {@link ExportMimeTypeConfig}. The configured stack is
 * read from {@link GetClipboardDataExtension} via the editor's peer
 * dependency lookup; if the extension was not built into the editor, the
 * default stack is used.
 *
 * Useful when only one MIME representation is needed rather than the full
 * {@link LexicalClipboardData} produced by
 * {@link $getClipboardDataFromSelection}.
 *
 * Must be called from within an editor update or read.
 *
 * @param mimeType - The MIME type to serialize, e.g. `'text/html'`,
 *   `'application/x-lexical-editor'`, `'text/plain'`, or any custom key
 *   registered in the {@link ExportMimeTypeConfig}.
 * @param selection - The selection to serialize (defaults to
 *   `$getSelection()`).
 * @returns The serialized string for the requested MIME type, or `null` if
 *   no handler is registered for it or every handler returned `null`.
 */ function $exportMimeTypeFromSelection(mimeType, selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])()) {
    return callExportMimeTypeFunctionStack($getExportConfig()[mimeType] || [], selection);
}
/**
 * Lexical extension that controls how the current selection is serialized
 * into clipboard MIME types when copying or dragging out of the editor.
 *
 * The extension's config holds an {@link ExportMimeTypeConfig} — a stack of
 * {@link ExportMimeTypeFunction} per MIME type. Out of the box it provides
 * fallback serializers for `'application/x-lexical-editor'`, `'text/html'`,
 * and `'text/plain'` that defer to {@link $getLexicalContent},
 * {@link $getHtmlContent}, and `selection.getTextContent()` respectively.
 *
 * Apps can layer additional handlers on top to customize an existing
 * payload (delegating to the default via `next()`) or to register an
 * entirely new MIME type. Functions provided through `mergeConfig` are
 * appended to the existing stack for each MIME type, so a newly registered
 * handler runs first and may fall through to the previously registered
 * handlers via its `next` argument.
 *
 * The extension's `output` is the resolved {@link ExportMimeTypeConfig},
 * which {@link $getClipboardDataFromSelection} and
 * {@link $exportMimeTypeFromSelection} read via the editor's peer
 * dependency lookup.
 *
 * @example
 * ```ts
 * import {configExtension, defineExtension} from '@lexical/extension';
 * import {GetClipboardDataExtension} from '@lexical/clipboard';
 *
 * const MyClipboardExtension = defineExtension({
 *   name: 'my-app/clipboard',
 *   dependencies: [
 *     configExtension(GetClipboardDataExtension, {
 *       $exportMimeType: {
 *         // Wrap the default HTML output with an app-specific marker.
 *         'text/html': [
 *           (selection, next) => {
 *             const html = next();
 *             return html ? wrapWithMyAppMarker(html) : html;
 *           },
 *         ],
 *         // Add a brand-new MIME type.
 *         'application/vnd.myapp+json': [
 *           (selection) =>
 *             selection ? exportMyAppFormat(selection) : null,
 *         ],
 *       },
 *     }),
 *   ],
 * });
 * ```
 */ const GetClipboardDataExtension = {
    build (editor, config, state) {
        return config.$exportMimeType;
    },
    config: {
        $exportMimeType: DEFAULT_EXPORT_MIME_TYPE
    },
    mergeConfig (config, partial) {
        const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shallowMergeConfig"])(config, partial);
        if (partial.$exportMimeType) {
            const $exportMimeType = {
                ...config.$exportMimeType
            };
            for (const [k, v] of Object.entries(partial.$exportMimeType)){
                if (v) {
                    const prev = $exportMimeType[k];
                    $exportMimeType[k] = prev ? [
                        ...prev,
                        ...v
                    ] : v;
                }
            }
            merged.$exportMimeType = $exportMimeType;
        }
        return merged;
    },
    name: '@lexical/clipboard/GetClipboardData'
};
;
}),
"[project]/node_modules/@lexical/dragon/dist/LexicalDragon.dev.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragonExtension",
    ()=>DragonExtension,
    "installDragonSupport",
    ()=>installDragonSupport,
    "registerDragonSupport",
    ()=>registerDragonSupport
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@lexical/extension/dist/LexicalExtension.dev.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lexical/dist/Lexical.dev.mjs [app-rsc] (ecmascript)");
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const TEXT_FORMAT_BY_EXEC_COMMAND = {
    bold: 'bold',
    italic: 'italic',
    strikeThrough: 'strikethrough',
    subscript: 'subscript',
    superscript: 'superscript',
    underline: 'underline'
};
const WINDOW_STATE_KEY = Symbol.for('@lexical/dragon/WindowState');
function getOrCreateWindowState(targetWindow) {
    let state = targetWindow[WINDOW_STATE_KEY];
    if (state === undefined) {
        state = {
            dispose: ()=>{},
            editors: new Map(),
            installs: new Set()
        };
        targetWindow[WINDOW_STATE_KEY] = state;
    }
    return state;
}
function defaultWindow() {
    return ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
}
/**
 * Install the shared window listener that handles Dragon NaturallySpeaking's
 * web extension messages for every registered editor in the given window.
 *
 * Browsers invoke a window's message listeners in registration order, and
 * the extension's content script registers its own listener at document_end
 * of the initial page load. {@link registerDragonSupport} installs this
 * listener lazily, when an editor's root element is mounted, which loses
 * that race whenever editors mount after the initial load (a navigation in
 * a single page app, a dialog, any lazily rendered field). The extension
 * then edits the DOM directly before Lexical can stopImmediatePropagation,
 * and the edit is applied twice.
 *
 * Call this synchronously from every entrypoint that may render an editor
 * lazily, before document_end, so the listener is ahead of the extension's
 * and editors win the race no matter when they mount.
 *
 * Pass `targetWindow` to install the listener on a window other than the
 * global one (for example, an editor mounted inside an iframe). When
 * omitted, defaults to the current `window` when available. Returns a
 * teardown function; the listener for a window is removed once every
 * teardown for it (including the ones returned by
 * {@link registerDragonSupport}) has been called.
 */ function installDragonSupport(targetWindow = defaultWindow()) {
    return targetWindow ? addInstall(targetWindow, Symbol('@lexical/dragon/globalInstall'), undefined) : ()=>{};
}
function addInstall(targetWindow, installKey, editor) {
    const state = getOrCreateWindowState(targetWindow);
    if (state.installs.size === 0) {
        const boundHandleMessage = handleMessage.bind(targetWindow);
        targetWindow.addEventListener('message', boundHandleMessage, true);
        state.dispose = ()=>{
            targetWindow.removeEventListener('message', boundHandleMessage, true);
        };
    }
    state.installs.add(installKey);
    if (editor) {
        const installSet = state.editors.get(editor) || new Set();
        installSet.add(installKey);
        state.editors.set(editor, installSet);
    }
    return removeInstall.bind(null, targetWindow, state, installKey, editor);
}
function removeInstall(targetWindow, state, installKey, editor) {
    if (editor) {
        const installSet = state.editors.get(editor);
        if (installSet && installSet.delete(installKey) && installSet.size === 0) {
            state.editors.delete(editor);
        }
    }
    if (state.installs.delete(installKey) && state.installs.size === 0) {
        state.dispose();
        delete targetWindow[WINDOW_STATE_KEY];
    }
}
function getDefaultView(el) {
    return el && el.ownerDocument.defaultView;
}
function registerDragonSupport(editor) {
    const windowSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["watchedSignal"])(()=>getDefaultView(editor.getRootElement()), (self)=>editor.registerRootListener((rootElement)=>{
            self.value = getDefaultView(rootElement);
        }));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>{
        const targetWindow = windowSignal.value;
        if (targetWindow) {
            return addInstall(targetWindow, Symbol('@lexical/dragon/editorInstall'), editor);
        }
    });
}
function getFocusedEditor(targetWindow) {
    const state = targetWindow[WINDOW_STATE_KEY];
    if (state === undefined) {
        return null;
    }
    const activeEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEditorPropertyFromDOMNode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveElementDeep"])(targetWindow.document));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLexicalEditor"])(activeEditor) && state.editors.has(activeEditor) ? activeEditor : null;
}
function handleMessage(event) {
    const targetWindow = this;
    if (event.origin !== targetWindow.location.origin) {
        return;
    }
    const editor = getFocusedEditor(targetWindow);
    if (editor === null) {
        return;
    }
    const data = event.data;
    if (typeof data === 'string') {
        let parsedData;
        try {
            parsedData = JSON.parse(data);
        } catch (_e) {
            return;
        }
        if (parsedData && parsedData.protocol === 'nuanria_messaging' && parsedData.type === 'request') {
            const payload = parsedData.payload;
            if (payload && payload.functionId === 'makeChanges') {
                const args = payload.args;
                if (Array.isArray(args)) {
                    const [elementStart, elementLength, text, selStart, selLength, formatCommand] = args;
                    if (![
                        elementStart,
                        elementLength,
                        selStart,
                        selLength
                    ].every(Number.isFinite) || typeof text !== 'string' && text !== -1) {
                        return;
                    }
                    editor.update(()=>{
                        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
                            const anchor = selection.anchor;
                            let anchorNode = anchor.getNode();
                            let setSelStart = 0;
                            let setSelEnd = 0;
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(anchorNode)) {
                                // set initial selection
                                if (elementStart >= 0 && elementLength >= 0) {
                                    setSelStart = elementStart;
                                    setSelEnd = elementStart + elementLength;
                                    // If the offset is more than the end, make it the end
                                    selection.setTextNodeRange(anchorNode, setSelStart, anchorNode, setSelEnd);
                                }
                            }
                            // Dragon sends -1 (a number, not a string) as text for
                            // selection-only changes, such as Select-and-Say
                            // corrections and cursor moves by voice
                            if (typeof text === 'string' && (setSelStart !== setSelEnd || text !== '')) {
                                selection.insertRawText(text);
                                anchorNode = anchor.getNode();
                            }
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(anchorNode)) {
                                // set final selection
                                const anchorNodeTextLength = anchorNode.getTextContentSize();
                                // Clamp to the text size. Negative offsets have no meaning
                                // in the protocol, so they collapse the selection instead
                                // of leaving a range the next input would replace
                                setSelStart = Math.min(Math.max(selStart, 0), anchorNodeTextLength);
                                setSelEnd = selStart < 0 || selLength < 0 ? setSelStart : Math.min(selStart + selLength, anchorNodeTextLength);
                                selection.setTextNodeRange(anchorNode, setSelStart, anchorNode, setSelEnd);
                            }
                            // format the selection, e.g. for the "bold that" voice
                            // command. Dragon's extension applies this through
                            // document.execCommand, so the values are execCommand names.
                            if (typeof formatCommand === 'string' && selLength > 0 && !selection.isCollapsed()) {
                                const format = TEXT_FORMAT_BY_EXEC_COMMAND[formatCommand];
                                if (format !== undefined) {
                                    selection.formatText(format);
                                }
                            }
                            // block the chrome extension from handling this event
                            event.stopImmediatePropagation();
                        }
                    });
                }
            }
        }
    }
}
/**
 * Add Dragon speech to text input support to the editor, via the
 * \@lexical/dragon module.
 */ const DragonExtension = {
    build: (editor, config, state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["namedSignals"])(config),
    config: {
        disabled: ("TURBOPACK compile-time value", "undefined") === 'undefined'
    },
    name: '@lexical/dragon',
    register: (editor, config, state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>state.getOutput().disabled.value ? undefined : registerDragonSupport(editor))
};
;
}),
"[project]/node_modules/@lexical/react/dist/LexicalDecoratorBlockNode.dev.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$isDecoratorBlockNode",
    ()=>$isDecoratorBlockNode,
    "DecoratorBlockNode",
    ()=>DecoratorBlockNode
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lexical/dist/Lexical.dev.mjs [app-rsc] (ecmascript)");
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * The serialized form of a {@link DecoratorBlockNode}: the base serialized node
 * data plus the block's element `format` (alignment).
 */ /**
 * A base class for block-level {@link DecoratorNode}s (decorator nodes rendered
 * on their own line rather than inline). It stores an {@link ElementFormatType}
 * alignment, is not indentable, and renders into a `<div>`. Extend it for custom
 * block embeds such as images, videos, or tweets, typically pairing it with
 * {@link BlockWithAlignableContents} to handle selection and alignment.
 */ class DecoratorBlockNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DecoratorNode"] {
    __format;
    constructor(format, key){
        super(key);
        this.__format = format || '';
    }
    afterCloneFrom(prevNode) {
        super.afterCloneFrom(prevNode);
        this.__format = prevNode.__format;
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            format: this.__format || ''
        };
    }
    updateFromJSON(serializedNode) {
        return super.updateFromJSON(serializedNode).setFormat(serializedNode.format || '');
    }
    canIndent() {
        return false;
    }
    createDOM() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getDocument"])().createElement('div');
    }
    updateDOM() {
        return false;
    }
    setFormat(format) {
        const self = this.getWritable();
        self.__format = format;
        return self;
    }
    getFormat() {
        return this.getLatest().__format;
    }
    isInline() {
        return false;
    }
}
/**
 * @returns `true` if `node` is a {@link DecoratorBlockNode}, narrowing its type.
 */ function $isDecoratorBlockNode(node) {
    return node instanceof DecoratorBlockNode;
}
;
}),
"[project]/node_modules/@lexical/rich-text/dist/LexicalRichText.dev.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$createHeadingNode",
    ()=>$createHeadingNode,
    "$createQuoteNode",
    ()=>$createQuoteNode,
    "$isHeadingNode",
    ()=>$isHeadingNode,
    "$isQuoteNode",
    ()=>$isQuoteNode,
    "DRAG_DROP_PASTE",
    ()=>DRAG_DROP_PASTE,
    "HeadingAnnounceExtension",
    ()=>HeadingAnnounceExtension,
    "HeadingNode",
    ()=>HeadingNode,
    "QuoteNode",
    ()=>QuoteNode,
    "RichTextExtension",
    ()=>RichTextExtension,
    "RichTextImportExtension",
    ()=>RichTextImportExtension,
    "RichTextImportRules",
    ()=>RichTextImportRules,
    "ShadowRootQuoteRule",
    ()=>ShadowRootQuoteRule,
    "defaultShouldHandlePasteAsFiles",
    ()=>defaultShouldHandlePasteAsFiles,
    "quoteShadowRootState",
    ()=>quoteShadowRootState,
    "registerRichText",
    ()=>registerRichText
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$clipboard$2f$dist$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@lexical/clipboard/dist/LexicalClipboard.dev.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@lexical/extension/dist/LexicalExtension.dev.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@lexical/selection/dist/LexicalSelection.dev.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@lexical/utils/dist/LexicalUtils.dev.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lexical/dist/Lexical.dev.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$a11y$2f$dist$2f$LexicalA11y$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@lexical/a11y/dist/LexicalA11y.dev.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$dragon$2f$dist$2f$LexicalDragon$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@lexical/dragon/dist/LexicalDragon.dev.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@lexical/html/dist/LexicalHtml.dev.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function $readHeadingTag(key) {
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getNodeByKey"])(key);
    return $isHeadingNode(node) ? node.getTag() : null;
}
/**
 * Announces headings through the {@link AriaLiveRegionExtension} sink: a block
 * becoming a heading, and a heading ceasing to be one.
 *
 * The markdown shortcut consumes both keystrokes (`#` then space) and swaps the
 * block type, which is silent to a screen reader — so without this the user has
 * no way to know the transformation happened, or to confirm the level without
 * navigating out of the block and back in.
 *
 * Only those two transitions announce. Typing inside a heading, moving the
 * caret through it, and deleting text while the heading survives are all
 * silent; announcing on every keystroke would make a heading impossible to type
 * into.
 *
 * A destroyed node is gone from the current editor state, so its level is read
 * from the previous state `registerMutationListener` provides.
 */ const HeadingAnnounceExtension = {
    build: (_editor, config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["namedSignals"])(config),
    config: {
        created: 'Heading level %s',
        destroyed: 'Heading level %s removed',
        disabled: false
    },
    dependencies: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$a11y$2f$dist$2f$LexicalA11y$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AriaLiveRegionExtension"]
    ],
    name: '@lexical/rich-text/HeadingAnnounce',
    register (editor, _config, state) {
        const { created, destroyed, disabled } = state.getOutput();
        const { announce } = state.getDependency(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$a11y$2f$dist$2f$LexicalA11y$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AriaLiveRegionExtension"]).output;
        // Gate on `disabled` from an effect so a disabled announcer registers no
        // listener at all. Peek the message signals at announce time so editing
        // them does not re-register.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>disabled.value ? undefined : editor.registerMutationListener(HeadingNode, (nodes, { prevEditorState })=>{
                // A level change fires both a removal and a creation. In the
                // first block the removal reaches the live region, announcing the
                // old level instead of the new one. Prefer the creation; only
                // announce removal when nothing replaced it.
                let createdTag = null;
                let destroyedTag = null;
                for (const [key, mutation] of nodes){
                    if (mutation === 'created' && createdTag === null) {
                        createdTag = editor.read('latest', ()=>$readHeadingTag(key));
                    } else if (mutation === 'destroyed' && destroyedTag === null) {
                        destroyedTag = prevEditorState.read(()=>$readHeadingTag(key));
                    }
                }
                if (createdTag !== null) {
                    announce(created.peek().replace('%s', createdTag.slice(1)));
                } else if (destroyedTag !== null) {
                    announce(destroyed.peek().replace('%s', destroyedTag.slice(1)));
                }
            }, {
                skipInitialization: true
            }));
    }
};
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Heuristic copied (in spirit) from the legacy `isGoogleDocsTitle`:
 * Google Docs serializes the document title as a `<span style="font-size:
 * 26pt">` (sometimes wrapped in a `<p>`). The presence of a 26pt span at
 * the start of a `<p>` is treated as a heading-1 marker.
 */ function isGoogleDocsTitleSpan(node) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTMLElement"])(node) && node.nodeName === 'SPAN' && node.style.fontSize === '26pt';
}
const HeadingRule = {
    $import: (ctx, el)=>{
        const tag = el.nodeName.toLowerCase();
        const node = $createHeadingNode(tag);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setNodeIndentFromDOM"])(el, node);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setFormatFromDOM"])(node, el);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setDirectionFromDOM"])(node, el);
        return [
            node.splice(0, 0, ctx.$importChildren(el))
        ];
    },
    match: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sel"].tag('h1', 'h2', 'h3', 'h4', 'h5', 'h6'),
    name: '@lexical/rich-text/heading'
};
const QuoteRule = {
    $import: (ctx, el)=>{
        const node = $createQuoteNode();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setFormatFromDOM"])(node, el);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setNodeIndentFromDOM"])(el, node);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setDirectionFromDOM"])(node, el);
        return [
            node.splice(0, 0, ctx.$importChildren(el))
        ];
    },
    match: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sel"].tag('blockquote'),
    name: '@lexical/rich-text/blockquote'
};
/**
 * Opt-in replacement for the default `<blockquote>` rule that imports the
 * quote as a shadow root {@link QuoteNode} (see `quoteShadowRootState`).
 * Block-level children such as `<p>` are preserved as blocks and runs of
 * inline content are wrapped in paragraphs (`BlockSchema`), so structured
 * blockquote HTML round-trips faithfully instead of being flattened to
 * inline content.
 *
 * Not part of {@link RichTextImportRules}; without it `<blockquote>`
 * import behavior is unchanged. To opt in, contribute it from somewhere
 * that outranks {@link RichTextImportRules} in the compiled rule list —
 * either directly to the editor builder:
 * ```ts
 * buildEditorFromExtensions(
 *   MyExtension,
 *   configExtension(DOMImportExtension, {rules: [ShadowRootQuoteRule]}),
 * )
 * ```
 * or from an extension that depends on {@link RichTextExtension}:
 * ```ts
 * defineExtension({
 *   dependencies: [
 *     RichTextExtension,
 *     configExtension(DOMImportExtension, {rules: [ShadowRootQuoteRule]}),
 *   ],
 *   name: '@app/quotes',
 * })
 * ```
 * Either way the contribution is merged after rich-text's and therefore
 * prepended in front of it, so this rule is reached first and shadows the
 * default `@lexical/rich-text/blockquote` rule.
 *
 * @experimental
 */ const ShadowRootQuoteRule = {
    $import: (ctx, el)=>{
        const node = $createQuoteNode({
            shadowRoot: true
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setFormatFromDOM"])(node, el);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setNodeIndentFromDOM"])(el, node);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setDirectionFromDOM"])(node, el);
        return [
            node.splice(0, 0, ctx.$importChildren(el, {
                schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BlockSchema"]
            }))
        ];
    },
    match: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sel"].tag('blockquote'),
    name: '@lexical/rich-text/blockquote-shadow-root'
};
/**
 * Google-Docs paragraph wrapper around a title span: drop the paragraph,
 * let the span rule below promote to a heading. The body deliberately
 * returns the children unwrapped (no schema, no own node) so the
 * descendant rules — including {@link GoogleDocsTitleSpanRule} — fire and
 * produce the heading at this level.
 */ const GoogleDocsTitleParagraphRule = {
    $import: (ctx, el, $next)=>{
        const first = el.firstChild;
        if (first && isGoogleDocsTitleSpan(first)) {
            return ctx.$importChildren(el);
        }
        return $next();
    },
    match: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sel"].tag('p'),
    name: '@lexical/rich-text/google-docs-title-p'
};
const GoogleDocsTitleSpanRule = {
    $import: (ctx, el, $next)=>el.style.fontSize !== '26pt' ? $next() : [
            $createHeadingNode('h1').splice(0, 0, ctx.$importChildren(el))
        ],
    match: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sel"].tag('span'),
    name: '@lexical/rich-text/google-docs-title-span'
};
/**
 * Import rules for {@link HeadingNode} and {@link QuoteNode}, including
 * the Google Docs title heuristic that the legacy `HeadingNode.importDOM`
 * declared. This whole array is contributed by {@link RichTextExtension},
 * which depends on `CoreImportExtension`, so it is prepended in front of
 * {@link CoreImportRules}: the Google-Docs `<p>` / `<span>` rules here are
 * reached before the generic `<p>` and `<span>` rules from core, and defer
 * to them via `$next()` when the Google-Docs heuristic doesn't match.
 *
 * Registered by {@link RichTextExtension} itself (together with
 * `CoreImportExtension`), so any editor that uses the rich-text
 * extension can import these tags through the `DOMImportExtension`
 * pipeline without further configuration.
 *
 * @experimental
 */ const RichTextImportRules = [
    HeadingRule,
    QuoteRule,
    GoogleDocsTitleParagraphRule,
    GoogleDocsTitleSpanRule
];
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Configuration for {@link RichTextExtension}.
 *
 * @property escapeFormatTriggers - Per-format trigger configuration that
 *   controls which text formats are automatically cleared from the selection
 *   on specific user interactions.
 *
 *   Defaults to:
 *   ```ts
 *   {
 *     capitalize: {enter: true, space: true, tab: true},
 *     lowercase: {enter: true, space: true, tab: true},
 *     uppercase: {enter: true, space: true, tab: true},
 *   }
 *   ```
 *
 *   To opt in to escaping `code` formatting at text node boundaries:
 *   ```ts
 *   configExtension(RichTextExtension, {
 *     escapeFormatTriggers: {
 *       code: {onlyAtBoundary: true, enter: true, click: true, arrow: true},
 *     },
 *   })
 *   ```
 */ const DEFAULT_RICH_TEXT_CONFIG = {
    escapeFormatTriggers: {
        capitalize: {
            enter: true,
            space: true,
            tab: true
        },
        lowercase: {
            enter: true,
            space: true,
            tab: true
        },
        uppercase: {
            enter: true,
            space: true,
            tab: true
        }
    },
    shouldHandlePasteAsFiles: defaultShouldHandlePasteAsFiles
};
function mergeTriggerConfig(config, override) {
    if (!config || override === null) {
        return override;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shallowMergeConfig"])(config, override);
}
function mergeEscapeFormatTriggers(config, overrides) {
    const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shallowMergeConfig"])(config, overrides);
    for (const k of Object.keys(overrides)){
        merged[k] = mergeTriggerConfig(config[k], overrides[k]);
    }
    return merged;
}
function mergeRichTextConfig(config, overrides) {
    const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shallowMergeConfig"])(config, overrides);
    if (overrides.escapeFormatTriggers) {
        merged.escapeFormatTriggers = mergeEscapeFormatTriggers(config.escapeFormatTriggers, overrides.escapeFormatTriggers);
    }
    return merged;
}
const RichTextExtension = {
    build: (_editor, config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["namedSignals"])(config),
    config: DEFAULT_RICH_TEXT_CONFIG,
    conflictsWith: [
        '@lexical/plain-text'
    ],
    dependencies: [
        HeadingAnnounceExtension,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$dragon$2f$dist$2f$LexicalDragon$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DragonExtension"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NormalizeInlineElementsExtension"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NormalizeTripleClickSelectionExtension"],
        // DOMImportExtension support for the nodes registered here. Inert
        // unless the editor routes HTML through the pipeline (e.g. via
        // ClipboardDOMImportExtension or $generateNodesFromDOMViaExtension).
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CoreImportExtension"],
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$html$2f$dist$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOMImportExtension"],
            {
                rules: RichTextImportRules
            }
        ]
    ],
    mergeConfig: mergeRichTextConfig,
    name: '@lexical/rich-text',
    nodes: ()=>[
            HeadingNode,
            QuoteNode
        ],
    register: (editor, _config, state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>{
            const { escapeFormatTriggers, shouldHandlePasteAsFiles } = state.getOutput();
            return registerRichText(editor, escapeFormatTriggers, shouldHandlePasteAsFiles);
        })
};
/**
 * Bundles {@link RichTextImportRules} together with the runtime
 * {@link RichTextExtension}.
 *
 * @experimental
 * @deprecated {@link RichTextExtension} now registers
 * {@link RichTextImportRules} (and `CoreImportExtension`) itself —
 * depend on it directly instead.
 */ const RichTextImportExtension = {
    dependencies: [
        RichTextExtension
    ],
    name: '@lexical/rich-text/Import'
};
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const DRAG_DROP_PASTE = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCommand"])('DRAG_DROP_PASTE_FILE');
/**
 * Opt-in state for {@link QuoteNode.isShadowRoot}. When `true`, the quote
 * behaves like a multi-block region (similar to a table cell): it holds
 * block-level children (paragraphs, headings, ...) instead of inline
 * content, which allows more faithful HTML and Markdown import/export of
 * `<blockquote>` content. Defaults to `false`, in which case there is no
 * change to the legacy behavior (and nothing extra is serialized).
 */ const quoteShadowRootState = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createState"])('shadowRoot', {
    parse: Boolean
});
/** @noInheritDoc */ class QuoteNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementNode"] {
    $config() {
        return this.config('quote', {
            extends: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementNode"],
            importDOM: {
                blockquote: ()=>({
                        conversion: $convertBlockquoteElement,
                        priority: 0
                    })
            },
            stateConfigs: [
                {
                    flat: true,
                    stateConfig: quoteShadowRootState
                }
            ]
        });
    }
    /**
   * `true` when this quote has opted in to shadow root behavior with
   * {@link setIsShadowRoot} or `$createQuoteNode({shadowRoot: true})`,
   * in which case it contains block-level children rather than inline
   * content. `false` (the legacy inline-content behavior) by default.
   */ isShadowRoot() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getState"])(this, quoteShadowRootState);
    }
    /**
   * Opt this quote in to (or out of) shadow root behavior. See
   * {@link quoteShadowRootState}. Note that this does not restructure any
   * existing children; a shadow root quote is expected to contain
   * block-level children (non-element children will be normalized into
   * paragraphs by the built-in shadow root transform).
   */ setIsShadowRoot(isShadowRoot) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setState"])(this, quoteShadowRootState, isShadowRoot);
    }
    // View
    createDOM(config) {
        const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getDocument"])().createElement('blockquote');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addClassNamesToElement"])(element, config.theme.quote);
        return element;
    }
    updateDOM(prevNode, dom, config) {
        return false;
    }
    exportDOM(editor) {
        const { element } = super.exportDOM(editor);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
            if (this.isEmpty()) {
                element.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getDocument"])().createElement('br'));
            }
            const formatType = this.getFormatType();
            if (formatType) {
                element.style.textAlign = formatType;
            }
            const direction = this.getDirection();
            if (direction) {
                element.dir = direction;
            }
        }
        return {
            element
        };
    }
    exportJSON() {
        return super.exportJSON();
    }
    static importJSON(serializedNode) {
        return $createQuoteNode().updateFromJSON(serializedNode);
    }
    // Mutation
    insertNewAfter(rangeSelection, restoreSelection) {
        const newBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
        newBlock.setTextFormat(rangeSelection.format);
        newBlock.setTextStyle(rangeSelection.style);
        const direction = this.getDirection();
        newBlock.setDirection(direction);
        newBlock.setFormat(this.getFormatType());
        newBlock.setStyle(this.getStyle());
        this.insertAfter(newBlock, restoreSelection);
        return newBlock;
    }
    collapseAtStart() {
        if (this.isShadowRoot()) {
            // A shadow root quote holds block-level children, so collapsing
            // dissolves the quote and lifts the blocks out as siblings rather
            // than merging them into a single paragraph.
            for (const child of this.getChildren()){
                this.insertBefore(child);
            }
            this.remove();
            return true;
        }
        const paragraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
        const children = this.getChildren();
        children.forEach((child)=>paragraph.append(child));
        this.replace(paragraph);
        return true;
    }
    canMergeWhenEmpty() {
        return true;
    }
}
function $createQuoteNode(options) {
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$applyNodeReplacement"])(new QuoteNode());
    return options && options.shadowRoot ? node.setIsShadowRoot(true) : node;
}
function $isQuoteNode(node) {
    return node instanceof QuoteNode;
}
/** @noInheritDoc */ class HeadingNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementNode"] {
    /** @internal */ __tag;
    $config() {
        return this.config('heading', {
            extends: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementNode"],
            importDOM: {
                h1: ()=>({
                        conversion: $convertHeadingElement,
                        priority: 0
                    }),
                h2: ()=>({
                        conversion: $convertHeadingElement,
                        priority: 0
                    }),
                h3: ()=>({
                        conversion: $convertHeadingElement,
                        priority: 0
                    }),
                h4: ()=>({
                        conversion: $convertHeadingElement,
                        priority: 0
                    }),
                h5: ()=>({
                        conversion: $convertHeadingElement,
                        priority: 0
                    }),
                h6: ()=>({
                        conversion: $convertHeadingElement,
                        priority: 0
                    }),
                p: (node)=>{
                    // domNode is a <p> since we matched it by nodeName
                    const paragraph = node;
                    const firstChild = paragraph.firstChild;
                    if (firstChild !== null && isGoogleDocsTitle(firstChild)) {
                        return {
                            conversion: ()=>({
                                    node: null
                                }),
                            priority: 3
                        };
                    }
                    return null;
                },
                span: (node)=>{
                    if (isGoogleDocsTitle(node)) {
                        return {
                            conversion: ()=>{
                                return {
                                    node: $createHeadingNode('h1')
                                };
                            },
                            priority: 3
                        };
                    }
                    return null;
                }
            }
        });
    }
    afterCloneFrom(prevNode) {
        super.afterCloneFrom(prevNode);
        this.__tag = prevNode.__tag;
    }
    constructor(tag = 'h1', key){
        super(key);
        this.__tag = tag;
    }
    getTag() {
        return this.getLatest().__tag;
    }
    setTag(tag) {
        const self = this.getWritable();
        self.__tag = tag;
        return self;
    }
    // View
    createDOM(config) {
        const tag = this.__tag;
        const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getDocument"])().createElement(tag);
        const theme = config.theme;
        const classNames = theme.heading;
        if (classNames !== undefined) {
            const className = classNames[tag];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addClassNamesToElement"])(element, className);
        }
        return element;
    }
    updateDOM(prevNode, dom, config) {
        return prevNode.__tag !== this.__tag;
    }
    exportDOM(editor) {
        const { element } = super.exportDOM(editor);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
            if (this.isEmpty()) {
                element.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getDocument"])().createElement('br'));
            }
            const formatType = this.getFormatType();
            if (formatType) {
                element.style.textAlign = formatType;
            }
            const direction = this.getDirection();
            if (direction) {
                element.dir = direction;
            }
        }
        return {
            element
        };
    }
    updateFromJSON(serializedNode) {
        return super.updateFromJSON(serializedNode).setTag(serializedNode.tag);
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            tag: this.getTag()
        };
    }
    // Mutation
    insertNewAfter(selection, restoreSelection = true) {
        const anchorOffet = selection ? selection.anchor.offset : 0;
        const lastDesc = this.getLastDescendant();
        const isAtEnd = !lastDesc || selection && selection.anchor.key === lastDesc.getKey() && anchorOffet === lastDesc.getTextContentSize();
        const newElement = isAtEnd || !selection ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createParagraphNode"])() : // The heading is split in two, so the second half keeps the
        // block format and style of the first, like ParagraphNode does.
        $createHeadingNode(this.getTag()).setFormat(this.getFormatType()).setStyle(this.getStyle());
        const direction = this.getDirection();
        newElement.setDirection(direction);
        this.insertAfter(newElement, restoreSelection);
        if (anchorOffet === 0 && !this.isEmpty() && selection) {
            const paragraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
            paragraph.select();
            this.replace(paragraph, true);
        }
        return newElement;
    }
    collapseAtStart() {
        if (this.isEmpty()) {
            const paragraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
            const children = this.getChildren();
            children.forEach((child)=>paragraph.append(child));
            this.replace(paragraph);
        }
        return true;
    }
    extractWithChild() {
        return true;
    }
}
function isGoogleDocsTitle(domNode) {
    if (domNode.nodeName.toLowerCase() === 'span') {
        return domNode.style.fontSize === '26pt';
    }
    return false;
}
function $convertHeadingElement(element) {
    const nodeName = element.nodeName.toLowerCase();
    let node = null;
    if (nodeName === 'h1' || nodeName === 'h2' || nodeName === 'h3' || nodeName === 'h4' || nodeName === 'h5' || nodeName === 'h6') {
        node = $createHeadingNode(nodeName);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setNodeIndentFromDOM"])(element, node);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setFormatFromDOM"])(node, element);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setDirectionFromDOM"])(node, element);
    }
    return {
        node
    };
}
function $convertBlockquoteElement(element) {
    const node = $createQuoteNode();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setFormatFromDOM"])(node, element);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setNodeIndentFromDOM"])(element, node);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setDirectionFromDOM"])(node, element);
    return {
        node
    };
}
function $createHeadingNode(headingTag = 'h1') {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$applyNodeReplacement"])(new HeadingNode(headingTag));
}
function $isHeadingNode(node) {
    return node instanceof HeadingNode;
}
function onPasteForRichText(event, editor) {
    event.preventDefault();
    editor.update(()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        const clipboardData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(event, InputEvent) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(event, KeyboardEvent) ? null : event.clipboardData;
        if (clipboardData != null && selection !== null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$clipboard$2f$dist$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$insertDataTransferForRichText"])(clipboardData, selection, editor);
        }
    }, {
        // PASTE_TAG gives the paste its own undo entry: @lexical/history treats
        // the tag as a history boundary so undoing a paste does not also undo any
        // typing that preceded it (see #8609).
        tag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PASTE_TAG"]
    });
}
async function onCutForRichText(event, editor) {
    // Widen a whole-document range to the blocks themselves *before* the copy, so
    // the clipboard carries exactly what the removal below takes out: Cmd+X then
    // Cmd+V has to restore the heading, quote or list it took, not just its text
    // (#5835). A collapsed caret cuts nothing and is left alone. Tagged like the
    // removal so the two stay one entry in history.
    editor.update(()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && !selection.isCollapsed()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERNAL_$expandSelectionToWholeDocument"])(selection);
        }
    }, {
        discrete: true,
        tag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CUT_TAG"]
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$clipboard$2f$dist$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copyToClipboard"])(editor, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(event, ClipboardEvent) ? event : null);
    editor.update(()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            selection.removeText();
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            selection.getNodes().forEach((node)=>node.remove());
        }
    }, {
        // CUT_TAG gives the cut its own undo entry: @lexical/history treats the
        // tag as a history boundary so undoing a cut does not also undo any typing
        // that preceded it (see #8609).
        tag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CUT_TAG"]
    });
}
function $isTargetWithinDecorator(target) {
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(target);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(node);
}
function $isSelectionAtEndOfRoot(selection) {
    const focus = selection.focus;
    return focus.key === 'root' && focus.offset === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getRoot"])().getChildrenSize();
}
function $isSelectionAtStartOfRoot(selection) {
    const focus = selection.focus;
    return focus.key === 'root' && focus.offset === 0;
}
/**
 * True when the selection is a collapsed element point at the very start or
 * end of the root, beside a child that renders a block cursor (a decorator, a
 * table or another shadow root). There is nothing past the block cursor to
 * move to, so horizontal arrow navigation in that direction has to be a no-op.
 * Left to the browser, the native caret escapes to the other side of the block
 * instead and the caret appears to cycle around it. See #7999.
 */ function $isBlockCursorAtRootEdge(selection, direction) {
    if (!selection.isCollapsed()) {
        return false;
    }
    const isNext = direction === 'next';
    if (!(isNext ? $isSelectionAtEndOfRoot(selection) : $isSelectionAtStartOfRoot(selection))) {
        return false;
    }
    const offset = selection.focus.offset;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$needsBlockCursorBeside"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getRoot"])().getChildAtIndex(isNext ? offset - 1 : offset));
}
function $isSelectionCollapsedAtFrontOfIndentedBlock(selection) {
    if (!selection.isCollapsed()) {
        return false;
    }
    const { anchor } = selection;
    if (anchor.offset !== 0) {
        return false;
    }
    const anchorNode = anchor.getNode();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRootNode"])(anchorNode)) {
        return false;
    }
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$getNearestBlockElementAncestorOrThrow"])(anchorNode);
    return element.getIndent() > 0 && (element.is(anchorNode) || anchorNode.is(element.getFirstDescendant()));
}
/**
 * Trigger types that cause format escape at text node boundaries.
 * - `enter`: Escape on Enter key press
 * - `click`: Escape on mouse click
 * - `arrow`: Escape on arrow key navigation (left/right)
 * - `space`: Escape on Space key press
 * - `tab`: Escape on Tab key press
 */ /**
 * Trigger flags for a single format type. Set a trigger key to `true` to
 * escape that format when the corresponding user interaction occurs.
 *
 * When `onlyAtBoundary` is `true`, the format is only escaped when the cursor
 * is at the start or end of a formatted text node with no adjacent sibling in
 * that direction. When `onlyAtBoundary` is `false` or omitted the format is
 * always escaped regardless of cursor position (matching the legacy
 * `$resetCapitalization` behavior).
 */ /**
 * Per-format trigger configuration. Each {@link TextFormatType} maps to its
 * own set of triggers, or `null` to explicitly disable escape for that format
 * (useful when overriding defaults via `configExtension`).
 */ function $escapeFormatsForTrigger(selection, trigger, direction, config) {
    let isBoundary = false;
    let anchorNode = null;
    if (selection.isCollapsed() && selection.anchor.type === 'text') {
        const node = selection.anchor.getNode();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(node)) {
            anchorNode = node;
            const offset = selection.anchor.offset;
            const atEnd = offset === node.getTextContentSize() && node.getNextSibling() === null;
            const atStart = offset === 0 && node.getPreviousSibling() === null;
            isBoundary = direction === 'end' && atEnd || direction === 'start' && atStart || direction === 'both' && (atEnd || atStart);
        }
    }
    let didEscapeBoundary = false;
    for (const [formatKey, triggers] of Object.entries(config)){
        if (triggers == null || !triggers[trigger]) {
            continue;
        }
        const format = formatKey;
        if (triggers.onlyAtBoundary) {
            if (!isBoundary || !anchorNode || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(anchorNode) || !anchorNode.hasFormat(format)) {
                continue;
            }
            didEscapeBoundary = true;
        }
        if (selection.hasFormat(format)) {
            selection.toggleFormat(format);
        }
    }
    if (didEscapeBoundary) {
        selection.setStyle('');
    }
}
const DEFAULT_ESCAPE_FORMAT_TRIGGERS = {
    capitalize: {
        enter: true,
        space: true,
        tab: true
    },
    lowercase: {
        enter: true,
        space: true,
        tab: true
    },
    uppercase: {
        enter: true,
        space: true,
        tab: true
    }
};
function $tryEnterFromBlockCursor(selection, direction) {
    if (!selection.isCollapsed() || selection.anchor.type !== 'element') {
        return false;
    }
    const caret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$caretFromPoint"])(selection.anchor, direction);
    const child = caret.getNodeAtCaret();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isShadowRootNode"])(child) && !child.isInline()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setSelectionFromCaretRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCollapsedCaretRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$normalizeCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getChildCaret"])(child, direction))));
        return true;
    }
    return false;
}
function $tryBlockCursorShadowRootNavigation(selection, direction) {
    return $tryExitShadowRootToBlockCursor(selection, direction) || $tryEnterFromBlockCursor(selection, direction);
}
function $tryExitShadowRootToBlockCursor(selection, direction) {
    if (!selection.isCollapsed()) {
        return false;
    }
    const focusCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$caretFromPoint"])(selection.focus, direction);
    // Walk up from focus to find the nearest shadow root ancestor.
    // Start from the focus node itself since it may be a
    // shadow root (e.g. LayoutItem with element-type selection).
    const shadowRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])(focusCaret.origin, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isShadowRootNode"]);
    if (!shadowRoot) {
        return false;
    }
    // When focus is an element-type point, $caretFromPoint returns a caret
    // whose origin is a child of the focus node. If that child happens to be
    // (or sit inside) a shadow root, $findMatchingParent matches it even
    // though the selection is at the parent level, not inside the shadow root.
    // Skip the exit logic when the focus node is not actually inside the
    // found shadow root.
    const focusNode = selection.focus.getNode();
    if (!shadowRoot.is(focusNode) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$hasAncestor"])(focusNode, shadowRoot)) {
        return false;
    }
    // Check that the focus is at the edge of the shadow root in the given
    // direction. If focus is the shadow root itself, check the offset directly.
    // Otherwise walk toward the deepest first/last descendant.
    const textRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCaretRange"])(focusCaret, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(shadowRoot, direction));
    // If there's text we're not at the edge
    if (textRange.getTextSlices().some((slice)=>slice && slice.getTextContentSize() > 0)) {
        return false;
    }
    // Normalize the anchor in case it started with a ChildCaret
    const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCaretRange"])(textRange.anchor.getSiblingCaret(), textRange.focus);
    // When traversing from the edge to the root we expect to see only parent nodes
    // as sibling carets
    let prevOrigin = range.anchor.origin;
    for (const caret of range){
        if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isSiblingCaret"])(caret) && caret.origin.is(prevOrigin.getParent()))) {
            return false;
        }
        prevOrigin = caret.origin;
    }
    // Walk outward from the shadow root through nested shadow roots until
    // we find a sibling that needs a block cursor beside it.
    let prevShadow = shadowRoot;
    for (const caret of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$extendCaretToRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(shadowRoot, direction))){
        // A caret whose origin is the parent of the current level is the "leave"
        // step walking outward; only keep going while those parents are shadow
        // roots. Any other origin is the adjacent sibling at this level.
        if (caret.origin.is(prevShadow.getParent())) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isShadowRootNode"])(caret.origin)) {
                break;
            }
            prevShadow = caret.origin;
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$needsBlockCursorBeside"])(caret.origin)) {
            const sr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(prevShadow, direction);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setSelectionFromCaretRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCaretRange"])(sr, sr));
            return true;
        }
        break;
    }
    return false;
}
function $isSelectableBlockDecorator(node) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(node) && !node.isInline() && !node.isIsolated() && node.isKeyboardSelectable();
}
function $selectNode(key) {
    const nodeSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createNodeSelection"])();
    nodeSelection.add(key);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setSelection"])(nodeSelection);
}
function $tryDecoratorLineNavigation(selection, isBackward) {
    if (!selection.isCollapsed()) {
        return false;
    }
    const focus = selection.focus;
    const focusNode = focus.getNode();
    const direction = isBackward ? 'previous' : 'next';
    const focusCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$caretFromPoint"])(focus, direction);
    if (focus.type === 'element' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(focusNode) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(focusNode)) {
        const adjacentChild = focusCaret.getNodeAtCaret();
        if (adjacentChild !== null && $isSelectableBlockDecorator(adjacentChild)) {
            $selectNode(adjacentChild.__key);
            return true;
        }
        return false;
    }
    const topBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(focusNode) ? focusNode : focusNode.getParentOrThrow(), (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(n) && !n.isInline() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(n.getParent()));
    if (topBlock === null) {
        return false;
    }
    const adjacentSibling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(topBlock, direction).getNodeAtCaret();
    if (adjacentSibling === null || !$isSelectableBlockDecorator(adjacentSibling)) {
        return false;
    }
    // Empty blocks always escape on line-move, so skip the DOM probe.
    if (topBlock.getTextContentSize() === 0) {
        $selectNode(adjacentSibling.__key);
        return true;
    }
    const rootElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getEditor"])().getRootElement();
    if (rootElement === null) {
        return false;
    }
    const domSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDOMSelection"])(rootElement.ownerDocument.defaultView);
    if (domSelection === null || domSelection.rangeCount === 0) {
        return false;
    }
    const savedAnchorNode = domSelection.anchorNode;
    const savedAnchorOffset = domSelection.anchorOffset;
    const savedFocusNode = domSelection.focusNode;
    const savedFocusOffset = domSelection.focusOffset;
    domSelection.modify('move', isBackward ? 'backward' : 'forward', 'line');
    const newAnchorNode = domSelection.anchorNode;
    const newAnchorOffset = domSelection.anchorOffset;
    if (newAnchorNode === null) {
        restoreDOMSelection(domSelection, savedAnchorNode, savedAnchorOffset, savedFocusNode, savedFocusOffset);
        return false;
    }
    const movedNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(newAnchorNode);
    restoreDOMSelection(domSelection, savedAnchorNode, savedAnchorOffset, savedFocusNode, savedFocusOffset);
    if (movedNode === null) {
        return false;
    }
    // Firefox stays in place when modify('move', 'backward', 'line') hits
    // the top of a block — treat no movement as reaching the block edge.
    const didNotMove = newAnchorNode === savedAnchorNode && newAnchorOffset === savedAnchorOffset;
    if (didNotMove) {
        $selectNode(adjacentSibling.__key);
        return true;
    }
    const stillInSameBlock = movedNode.is(topBlock) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$hasAncestor"])(movedNode, topBlock);
    if (stillInSameBlock) {
        return false;
    }
    $selectNode(adjacentSibling.__key);
    return true;
}
function restoreDOMSelection(domSelection, anchorNode, anchorOffset, focusNode, focusOffset) {
    if (anchorNode !== null && focusNode !== null) {
        domSelection.setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset);
    }
}
function $tryInlineGridLineNavigation(selection, isBackward) {
    if (!selection.isCollapsed()) {
        return false;
    }
    const focusNode = selection.focus.getNode();
    const parentBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(focusNode) ? focusNode : focusNode.getParentOrThrow(), (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(n) && !n.isInline());
    if (parentBlock === null) {
        return false;
    }
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getEditor"])();
    const rootElement = editor.getRootElement();
    if (rootElement === null) {
        return false;
    }
    const win = rootElement.ownerDocument.defaultView;
    if (win === null) {
        return false;
    }
    let hasGrid = false;
    for (const child of parentBlock.getChildren()){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(child) && child.isInline()) {
            const dom = editor.getElementByKey(child.getKey());
            if (dom !== null) {
                const d = win.getComputedStyle(dom).display;
                if (d === 'inline-grid' || d === 'inline-flex') {
                    hasGrid = true;
                    break;
                }
            }
        }
    }
    if (!hasGrid) {
        return false;
    }
    const direction = isBackward ? 'previous' : 'next';
    const siblingBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(parentBlock, direction).getNodeAtCaret();
    if (siblingBlock === null || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(siblingBlock)) {
        if (isBackward) {
            const first = parentBlock.getFirstDescendant();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(first)) {
                first.select(0, 0);
            } else {
                parentBlock.select(0, 0);
            }
        } else {
            const last = parentBlock.getLastDescendant();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(last)) {
                const len = last.getTextContentSize();
                last.select(len, len);
            } else {
                const count = parentBlock.getChildrenSize();
                parentBlock.select(count, count);
            }
        }
        return true;
    }
    const siblingDOM = editor.getElementByKey(siblingBlock.getKey());
    if (siblingDOM === null) {
        return false;
    }
    const domSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDOMSelection"])(win);
    if (domSelection === null || domSelection.rangeCount === 0) {
        return false;
    }
    const curRange = domSelection.getRangeAt(0).cloneRange();
    curRange.collapse(true);
    const curRect = curRange.getBoundingClientRect();
    const sibRect = siblingDOM.getBoundingClientRect();
    const targetY = sibRect.top + sibRect.height / 2;
    if (curRect.height > 0) {
        const hit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$clipboard$2f$dist$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["caretFromPoint"])(curRect.left, targetY, rootElement);
        if (hit !== null && siblingDOM.contains(hit.node)) {
            const hitRange = rootElement.ownerDocument.createRange();
            hitRange.setStart(hit.node, hit.offset);
            hitRange.collapse(true);
            selection.applyDOMRange(hitRange);
            selection.dirty = true;
            return true;
        }
    }
    const targetDesc = isBackward ? siblingBlock.getLastDescendant() : siblingBlock.getFirstDescendant();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(targetDesc)) {
        const offset = isBackward ? targetDesc.getTextContentSize() : 0;
        targetDesc.select(offset, offset);
    } else {
        const childCount = siblingBlock.getChildrenSize();
        siblingBlock.select(isBackward ? childCount : 0, isBackward ? childCount : 0);
    }
    return true;
}
function $exitNodeSelectionToward(node, direction) {
    const caret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(node, direction);
    const sibling = caret.getAdjacentCaret();
    if (sibling !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(sibling.origin) && !sibling.origin.isInline() && sibling.origin.isShadowRoot()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setSelectionFromCaretRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCollapsedCaretRange"])(caret));
    } else if (direction === 'next') {
        node.selectNext(0, 0);
    } else {
        node.selectPrevious();
    }
}
/**
 * Convert a contiguous NodeSelection to a RangeSelection that covers the same
 * siblings. Discontiguous NodeSelections cannot be represented as a range
 * without selecting the nodes between them, so they retain the existing
 * collapse behavior in the arrow handlers.
 */ function $convertContiguousNodeSelection(selection, direction) {
    const carets = selection.getNodes().map((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(node, 'next')).sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$comparePointCaretNext"]);
    // At least one node
    const firstCaret = carets[0];
    const lastCaret = carets[carets.length - 1];
    if (!firstCaret || !lastCaret) {
        return false;
    }
    // Check that all nodes are contiguous
    for(let i = 0; i < carets.length - 1; i++){
        if (!carets[i + 1].origin.is(carets[i].getNodeAtCaret())) {
            return false;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setSelectionFromCaretRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCaretRangeInDirection"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCaretRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$rewindSiblingCaret"])(firstCaret), lastCaret), direction));
    // The arrow handlers fall through to the RangeSelection paths after this,
    // and the vertical ones leave the extension to the browser's default action
    // for this keydown. That action reads the DOM selection, but this update
    // would otherwise be committed in a microtask, and Firefox does not pick up
    // a selection that lands after the keydown listeners return — it would
    // extend nothing on the first press. Commit synchronously so every browser
    // extends the converted selection.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$flushSyncAfterUpdate"])();
    return true;
}
/**
 * Collapse a NodeSelection to a caret at the surrounding block's edge for
 * MOVE_TO_START / MOVE_TO_END. Picks the document-order first node for
 * MOVE_TO_START (`isBackward = true`) or last for MOVE_TO_END, walks up
 * to the picked node's nearest non-inline ancestor, and lands the caret
 * at that block's offset `0` or `childrenSize`.
 *
 * Document order is resolved via `$comparePointCaretNext` over each
 * selected node's `'next'` sibling caret — `NodeSelection.getNodes()`
 * iterates `_nodes: Set<NodeKey>` in click-insertion order, so a Set-
 * index pick would land on the most-recently-clicked node, not the
 * document-order first / last.
 *
 * A decorator nested inside an element-decorator host (e.g. inside a
 * card title paragraph) promotes to the surrounding paragraph rather
 * than the host's edge — the `n !== targetNode` guard excludes the
 * node itself, so a whole-element NodeSelection (the host) snaps to
 * its parent block, not its own interior. Falls back to the root when
 * no non-inline ancestor below the root matches, which lands the
 * caret at the document edge.
 *
 * Distinct from `KEY_ARROW_LEFT_COMMAND` / `KEY_ARROW_RIGHT_COMMAND`,
 * which step to the immediate sibling via `selectPrevious` /
 * `selectNext`. Cmd+Arrow is a line-end command rather than a one-step
 * caret move, so the block edge is the intended target. `event.shiftKey`
 * is not honored — NodeSelection has no natural "extend toward block
 * edge" semantic.
 *
 * Always calls `preventDefault` and `stopPropagation` so Chrome's
 * native Cmd+Arrow page-navigate cannot fall through.
 *
 * @internal
 */ function $promoteNodeSelectionToBlockEdge(selection, isBackward, event) {
    event.preventDefault();
    event.stopPropagation();
    const nodes = selection.getNodes();
    if (nodes.length === 0) {
        return true;
    }
    const sorted = nodes.map((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(node, 'next')).sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$comparePointCaretNext"]);
    const targetNode = (isBackward ? sorted[0] : sorted[sorted.length - 1]).origin;
    const block = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])(targetNode, (n)=>n !== targetNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(n) && !n.isInline()) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getRoot"])();
    const offset = isBackward ? 0 : block.getChildrenSize();
    block.select(offset, offset);
    return true;
}
/**
 * Decides whether a paste event carrying files should be handled by
 * dispatching {@link DRAG_DROP_PASTE} with those files, rather than falling
 * through to the regular HTML paste handling.
 *
 * @param files - The files present on the clipboard, if any
 * @param hasTextContent - Whether the clipboard also carries text/html or
 * text/plain content
 */ /**
 * The historical behavior: files are only handled when the clipboard carries
 * no text content at all. Note that browsers put a text/html fallback on the
 * clipboard alongside the file when an image is copied via the context menu,
 * so this default routes such images through the HTML importer.
 */ function defaultShouldHandlePasteAsFiles(files, hasTextContent) {
    return files.length > 0 && !hasTextContent;
}
function registerRichText(editor, escapeFormatTriggers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["signal"])(DEFAULT_ESCAPE_FORMAT_TRIGGERS), shouldHandlePasteAsFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$extension$2f$dist$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["signal"])(defaultShouldHandlePasteAsFiles)) {
    const removeListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CLICK_COMMAND"], (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            // A click on an already-selected node is an interaction with that
            // node (its own click handler may select it, open an editor, …),
            // not a deselect gesture. Keep the selection when the click target
            // is inside the selected node's DOM; clicking anywhere else still
            // deselects (facebook/lexical#8907).
            const eventTarget = event.target;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTMLElement"])(eventTarget)) {
                for (const node of selection.getNodes()){
                    const dom = editor.getElementByKey(node.getKey());
                    if (dom !== null && dom.contains(eventTarget)) {
                        return false;
                    }
                }
            }
            selection.clear();
            return true;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            $escapeFormatsForTrigger(selection, 'click', 'both', escapeFormatTriggers.peek());
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DELETE_CHARACTER_COMMAND"], (isBackward)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            selection.deleteCharacter(isBackward);
            return true;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            selection.deleteNodes();
            return true;
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DELETE_WORD_COMMAND"], (isBackward)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        selection.deleteWord(isBackward);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DELETE_LINE_COMMAND"], (isBackward)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        selection.deleteLine(isBackward);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONTROLLED_TEXT_INSERTION_COMMAND"], (eventOrText)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (typeof eventOrText === 'string') {
            if (selection !== null) {
                selection.insertText(eventOrText);
            }
        } else {
            if (selection === null) {
                return false;
            }
            const dataTransfer = eventOrText.dataTransfer;
            if (dataTransfer != null) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$clipboard$2f$dist$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$insertDataTransferForRichText"])(dataTransfer, selection, editor);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
                const data = eventOrText.data;
                if (data) {
                    selection.insertText(data);
                }
                return true;
            }
        }
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["REMOVE_TEXT_COMMAND"], ()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        selection.removeText();
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FORMAT_TEXT_COMMAND"], (format)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            return false;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$formatText"])(selection, format);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SET_TEXT_FORMAT_COMMAND"], (formats)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            return false;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setTextFormat"])(selection, formats);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FORMAT_ELEMENT_COMMAND"], (format)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            return false;
        }
        const nodes = selection.getNodes();
        for (const node of nodes){
            const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])(node, (parentNode)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(parentNode) && !parentNode.isInline());
            if (element !== null) {
                element.setFormat(format);
            }
        }
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INSERT_LINE_BREAK_COMMAND"], (selectStart)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        selection.insertLineBreak(selectStart);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INSERT_PARAGRAPH_COMMAND"], ()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        selection.insertParagraph();
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INSERT_TAB_COMMAND"], ()=>{
        const tabNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createTabNode"])();
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            tabNode.setFormat(selection.format);
            tabNode.setStyle(selection.style);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$insertNodes"])([
            tabNode
        ]);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INDENT_CONTENT_COMMAND"], ()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$handleIndentAndOutdent"])((block)=>{
            const indent = block.getIndent();
            block.setIndent(indent + 1);
        });
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OUTDENT_CONTENT_COMMAND"], ()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$handleIndentAndOutdent"])((block)=>{
            const indent = block.getIndent();
            if (indent > 0) {
                block.setIndent(Math.max(0, indent - 1));
            }
        });
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_ARROW_UP_COMMAND"], (event)=>{
        let selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            // If selection is on a node, let's try and move selection
            // back to being a range selection.
            const nodes = selection.getNodes();
            if (nodes.length > 0) {
                if (event.shiftKey && $convertContiguousNodeSelection(selection, 'previous')) {
                    // Fallthrough
                    selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
                } else {
                    event.preventDefault();
                    $exitNodeSelectionToward(nodes[0], 'previous');
                    return true;
                }
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            if ($isSelectionAtStartOfRoot(selection)) {
                event.preventDefault();
                return true;
            }
            if (!event.shiftKey && $tryBlockCursorShadowRootNavigation(selection, 'previous')) {
                event.preventDefault();
                return true;
            }
            if (!event.shiftKey && $tryDecoratorLineNavigation(selection, true)) {
                event.preventDefault();
                return true;
            }
            if (!event.shiftKey && $tryInlineGridLineNavigation(selection, true)) {
                event.preventDefault();
                return true;
            }
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_ARROW_DOWN_COMMAND"], (event)=>{
        let selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            // If selection is on a node, let's try and move selection
            // back to being a range selection.
            const nodes = selection.getNodes();
            if (nodes.length > 0) {
                if (event.shiftKey && $convertContiguousNodeSelection(selection, 'next')) {
                    // Fallthrough
                    selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
                } else {
                    event.preventDefault();
                    $exitNodeSelectionToward(nodes[0], 'next');
                    return true;
                }
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            if ($isSelectionAtEndOfRoot(selection)) {
                event.preventDefault();
                return true;
            }
            if (!event.shiftKey && $tryBlockCursorShadowRootNavigation(selection, 'next')) {
                event.preventDefault();
                return true;
            }
            if (!event.shiftKey && $tryDecoratorLineNavigation(selection, false)) {
                event.preventDefault();
                return true;
            }
            if (!event.shiftKey && $tryInlineGridLineNavigation(selection, false)) {
                event.preventDefault();
                return true;
            }
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_ARROW_LEFT_COMMAND"], (event)=>{
        let selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            // If selection is on a node, let's try and move selection
            // back to being a range selection.
            const nodes = selection.getNodes();
            if (nodes.length > 0) {
                const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$isParentRTL"])(nodes[0]) ? 'next' : 'previous';
                if (event.shiftKey && $convertContiguousNodeSelection(selection, direction)) {
                    // Fallthrough
                    selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
                } else {
                    event.preventDefault();
                    $exitNodeSelectionToward(nodes[0], direction);
                    return true;
                }
            }
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        const leftDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$isParentRTL"])(selection.anchor.getNode()) ? 'next' : 'previous';
        if ($isBlockCursorAtRootEdge(selection, leftDirection)) {
            event.preventDefault();
            return true;
        }
        if (!event.shiftKey && $tryBlockCursorShadowRootNavigation(selection, leftDirection)) {
            event.preventDefault();
            return true;
        }
        if (!event.shiftKey) {
            $escapeFormatsForTrigger(selection, 'arrow', 'start', escapeFormatTriggers.peek());
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$shouldOverrideDefaultCharacterSelection"])(selection, true)) {
            const isHoldingShift = event.shiftKey;
            event.preventDefault();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$moveCharacter"])(selection, isHoldingShift, true);
            return true;
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_ARROW_RIGHT_COMMAND"], (event)=>{
        let selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            // If selection is on a node, let's try and move selection
            // back to being a range selection.
            const nodes = selection.getNodes();
            if (nodes.length > 0) {
                const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$isParentRTL"])(nodes[0]) ? 'previous' : 'next';
                if (event.shiftKey && $convertContiguousNodeSelection(selection, direction)) {
                    // Fallthrough
                    selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
                } else {
                    event.preventDefault();
                    $exitNodeSelectionToward(nodes[0], direction);
                    return true;
                }
            }
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        const rightDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$isParentRTL"])(selection.anchor.getNode()) ? 'previous' : 'next';
        if ($isBlockCursorAtRootEdge(selection, rightDirection)) {
            event.preventDefault();
            return true;
        }
        if (!event.shiftKey && $tryBlockCursorShadowRootNavigation(selection, rightDirection)) {
            event.preventDefault();
            return true;
        }
        if (!event.shiftKey) {
            $escapeFormatsForTrigger(selection, 'arrow', 'end', escapeFormatTriggers.peek());
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$shouldOverrideDefaultCharacterSelection"])(selection, false)) {
            const isHoldingShift = event.shiftKey;
            event.preventDefault();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$moveCharacter"])(selection, isHoldingShift, false);
            return true;
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_BACKSPACE_COMMAND"], (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        // A NodeSelection (e.g. a click that selected a block decorator) is
        // the user's explicit "delete this node" gesture. The decorator
        // pass-through below is meant to keep keystrokes flowing into an
        // editable nested inside a decorator (image caption, etc.), but a
        // NodeSelection is exactly the case where the user wants us to
        // handle backspace ourselves.
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            if ($isTargetWithinDecorator(event.target)) {
                return false;
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            if ($isSelectionCollapsedAtFrontOfIndentedBlock(selection)) {
                event.preventDefault();
                return editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OUTDENT_CONTENT_COMMAND"]);
            }
            // On iOS, blocking the keydown event's default prevents the system
            // keyboard from updating its autocomplete/autocorrect suggestion bar
            // after Backspace. Returning false here skips event.preventDefault()
            // on keydown; the beforeinput deleteContentBackward handler still runs
            // and performs the deletion, so editing behavior is unchanged.
            // See https://github.com/facebook/lexical/issues/5841
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IS_IOS"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CAN_USE_BEFORE_INPUT"]) {
                return false;
            }
        } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            return false;
        }
        event.preventDefault();
        return editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DELETE_CHARACTER_COMMAND"], true);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_DELETE_COMMAND"], (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        // Same NodeSelection bypass as KEY_BACKSPACE_COMMAND above: a click
        // that selected a block decorator is the user's "delete this node"
        // gesture, even though the click target lives inside a decorator.
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            if ($isTargetWithinDecorator(event.target)) {
                return false;
            }
        }
        if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection))) {
            return false;
        }
        event.preventDefault();
        return editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DELETE_CHARACTER_COMMAND"], false);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_ENTER_COMMAND"], (event)=>{
        let selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        // When a block-level DecoratorNode is selected as a NodeSelection
        // (e.g. it is the only root child after the user removed all
        // surrounding paragraphs), Enter has no RangeSelection to act on
        // and the default handler bails out, leaving the editor stuck.
        // Convert to a RangeSelection past the decorator so the default
        // RangeSelection handler below inserts a paragraph and places
        // the caret.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            const nodes = selection.getNodes();
            if (nodes.length === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(nodes[0]) && !nodes[0].isInline()) {
                selection = nodes[0].selectNext();
            }
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        $escapeFormatsForTrigger(selection, 'enter', 'both', escapeFormatTriggers.peek());
        if (event !== null) {
            // If we have beforeinput, then we can avoid blocking
            // the default behavior. This ensures that the iOS can
            // intercept that we're actually inserting a paragraph,
            // and autocomplete, autocapitalize etc work as intended.
            // This can also cause a strange performance issue in
            // Safari, where there is a noticeable pause due to
            // preventing the key down of enter.
            if ((__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IS_IOS"] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IS_SAFARI"] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IS_APPLE_WEBKIT"]) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CAN_USE_BEFORE_INPUT"]) {
                return false;
            }
            event.preventDefault();
            if (event.shiftKey) {
                return editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INSERT_LINE_BREAK_COMMAND"], false);
            }
        }
        return editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INSERT_PARAGRAPH_COMMAND"]);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_ESCAPE_COMMAND"], ()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        editor.blur();
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DROP_COMMAND"], (event)=>{
        const [, files] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eventFiles"])(event);
        if (files.length > 0) {
            const x = event.clientX;
            const y = event.clientY;
            const eventRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$clipboard$2f$dist$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["caretFromPoint"])(x, y, editor.getRootElement());
            if (eventRange !== null) {
                const { offset: domOffset, node: domNode } = eventRange;
                const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(domNode);
                if (node !== null) {
                    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createRangeSelection"])();
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(node)) {
                        selection.anchor.set(node.getKey(), domOffset, 'text');
                        selection.focus.set(node.getKey(), domOffset, 'text');
                    } else {
                        const parentKey = node.getParentOrThrow().getKey();
                        const offset = node.getIndexWithinParent() + 1;
                        selection.anchor.set(parentKey, offset, 'element');
                        selection.focus.set(parentKey, offset, 'element');
                    }
                    const normalizedSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$normalizeSelection__EXPERIMENTAL"])(selection);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setSelection"])(normalizedSelection);
                }
            }
            // The drop point does not always resolve to a caret (the browser
            // returns nothing for e.g. the editor's padding). We still consume
            // the event below, so the files have to be forwarded regardless,
            // otherwise the drop is silently discarded. PASTE_COMMAND already
            // dispatches DRAG_DROP_PASTE unconditionally.
            editor.dispatchCommand(DRAG_DROP_PASTE, files);
            event.preventDefault();
            return true;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$clipboard$2f$dist$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$handleRichTextDrop"])(event, editor);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DRAGSTART_COMMAND"], (event)=>{
        const [isFileTransfer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eventFiles"])(event);
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (isFileTransfer && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && !selection.isCollapsed() && event.dataTransfer !== null) {
            // Populate Lexical's own serialization so custom nodes (images,
            // decorators) survive a drop back into a Lexical editor rather than
            // being downgraded to text/html.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$clipboard$2f$dist$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setLexicalClipboardDataTransfer"])(event.dataTransfer, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$clipboard$2f$dist$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getClipboardDataFromSelection"])(selection));
            // Mark the drag source so a drop in a different editor can remove
            // the source range to produce cut-and-paste semantics.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$clipboard$2f$dist$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$writeDragSourceToDataTransfer"])(event.dataTransfer, editor);
        }
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DRAGOVER_COMMAND"], (event)=>{
        const [isFileTransfer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eventFiles"])(event);
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (isFileTransfer && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        // Do NOT call event.preventDefault() here for text drags. Canceling
        // dragover tells the browser the page will handle the drop itself,
        // which suppresses the native editable drop behavior (drop caret
        // tracking and the beforeinput insertFromDrop that $doDrop relies on
        // for drags that don't originate in a Lexical editor). The only
        // exception is a decorator node, which the browser can't show a drop
        // caret for anyway and whose drops are fully handled by DROP_COMMAND.
        const x = event.clientX;
        const y = event.clientY;
        const eventRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$clipboard$2f$dist$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["caretFromPoint"])(x, y, editor.getRootElement());
        if (eventRange !== null) {
            const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(eventRange.node);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(node)) {
                event.preventDefault();
            }
        }
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SELECT_ALL_COMMAND"], ()=>{
        // Scope SELECT_ALL only when the caret is inside a named-slot frame:
        // slots are shadow-root isolated, so a whole-document select-all
        // would escape the slot and let a single keystroke replace the host.
        // Every other context (including TableCell shadow roots) keeps the
        // legacy whole-document behavior; block/document scoping elsewhere
        // is provided by the opt-in SelectBlockExtension.
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$selectAll"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSlotFrame"])(selection.anchor.getNode()) !== null ? selection : null);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COPY_COMMAND"], (event)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$clipboard$2f$dist$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copyToClipboard"])(editor, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(event, ClipboardEvent) ? event : null);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CUT_COMMAND"], (event)=>{
        onCutForRichText(event, editor);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PASTE_COMMAND"], (event)=>{
        const [, files, hasTextContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$utils$2f$dist$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eventFiles"])(event);
        if (shouldHandlePasteAsFiles.peek()(files, hasTextContent) && editor.dispatchCommand(DRAG_DROP_PASTE, files)) {
            return true;
        }
        // if inputs then paste within the input ignore creating a new node on paste event
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDOMNode"])(event.target) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isSelectionCapturedInDecoratorInput"])(event.target)) {
            return false;
        }
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (selection !== null) {
            onPasteForRichText(event, editor);
            return true;
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_SPACE_COMMAND"], ()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            $escapeFormatsForTrigger(selection, 'space', 'both', escapeFormatTriggers.peek());
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_TAB_COMMAND"], ()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            $escapeFormatsForTrigger(selection, 'tab', 'both', escapeFormatTriggers.peek());
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MOVE_TO_END"], (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            return $promoteNodeSelectionToBlockEdge(selection, false, event);
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        const { anchor } = selection;
        if (anchor.type !== 'element' || anchor.offset !== 0) {
            return false;
        }
        const element = anchor.getNode();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(element)) {
            return false;
        }
        const firstChild = element.getFirstChild();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(firstChild) || !firstChild.isInline()) {
            return false;
        }
        // Native browser cursor traversal stops at the inline decorator's
        // contenteditable=false boundary when the caret starts at element
        // offset 0, so MOVE_TO_END leaves the caret stuck. Move it
        // ourselves. `element.selectEnd()` already handles every
        // last-descendant case correctly — text descendant produces a
        // text-type selection at the end of the run, decorator descendant
        // and the empty-element fallback both produce an element-type
        // selection at offset childrenSize.
        const elementKey = element.getKey();
        const ending = element.selectEnd();
        if (event.shiftKey) {
            ending.anchor.set(elementKey, 0, 'element');
        }
        event.preventDefault();
        event.stopPropagation();
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MOVE_TO_START"], (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            return $promoteNodeSelectionToBlockEdge(selection, true, event);
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        const { anchor, focus } = selection;
        const focusBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])(focus.getNode(), (node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node) && !node.isInline());
        if (focusBlock === null) {
            return false;
        }
        const firstChild = focusBlock.getFirstChild();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(firstChild) || !firstChild.isInline()) {
            return false;
        }
        // Cross-block selections fall through to native handling. The
        // Chromium boundary bug only matters when both endpoints sit
        // inside the block whose first child is the inline decorator.
        const anchorBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])(anchor.getNode(), (node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node) && !node.isInline());
        if (anchorBlock !== focusBlock) {
            return false;
        }
        const blockKey = focusBlock.getKey();
        if (focus.type === 'element' && focus.key === blockKey && focus.offset === 0) {
            return false;
        }
        // Symmetric to the MOVE_TO_END case: Chromium stops the native
        // caret at the inline decorator's contenteditable=false boundary
        // when moving backwards, so element offset 0 is unreachable.
        selection.focus.set(blockKey, 0, 'element');
        if (!event.shiftKey) {
            selection.anchor.set(blockKey, 0, 'element');
        }
        event.preventDefault();
        event.stopPropagation();
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]));
    return removeListener;
}
;
}),
"[project]/node_modules/@lexical/selection/dist/LexicalSelection.dev.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$addNodeStyle",
    ()=>$addNodeStyle,
    "$copyBlockFormatIndent",
    ()=>$copyBlockFormatIndent,
    "$ensureForwardRangeSelection",
    ()=>$ensureForwardRangeSelection,
    "$forEachSelectedTextNode",
    ()=>$forEachSelectedTextNode,
    "$getComputedStyleForElement",
    ()=>$getComputedStyleForElement,
    "$getComputedStyleForParent",
    ()=>$getComputedStyleForParent,
    "$getSelectionStyleValueForProperty",
    ()=>$getSelectionStyleValueForProperty,
    "$isAtEdgeOfElement",
    ()=>$isAtEdgeOfElement,
    "$isAtNodeEnd",
    ()=>$isAtNodeEnd,
    "$isParentElementRTL",
    ()=>$isParentElementRTL,
    "$isParentRTL",
    ()=>$isParentRTL,
    "$moveCaretSelection",
    ()=>$moveCaretSelection,
    "$moveCharacter",
    ()=>$moveCharacter,
    "$patchStyleText",
    ()=>$patchStyleText,
    "$setBlocksType",
    ()=>$setBlocksType,
    "$shouldOverrideDefaultCharacterSelection",
    ()=>$shouldOverrideDefaultCharacterSelection,
    "$sliceSelectedTextNodeContent",
    ()=>$sliceSelectedTextNodeContent,
    "$trimTextContentFromAnchor",
    ()=>$trimTextContentFromAnchor,
    "$wrapNodes",
    ()=>$wrapNodes,
    "createDOMRange",
    ()=>createDOMRange,
    "createRectsFromDOMRange",
    ()=>createRectsFromDOMRange,
    "getCSSFromStyleObject",
    ()=>getCSSFromStyleObject,
    "getStyleObjectFromCSS",
    ()=>getStyleObjectFromCSS,
    "trimTextContentFromAnchor",
    ()=>trimTextContentFromAnchor
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lexical/dist/Lexical.dev.mjs [app-rsc] (ecmascript)");
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Do not require this module directly! Use normal `invariant` calls.
function formatDevErrorMessage(message) {
    throw new Error(message);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /*@__INLINE__*/ function warnOnlyOnce(message) {
    {
        let run = false;
        return ()=>{
            if (!run) {
                console.warn(message);
            }
            run = true;
        };
    }
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function getDOMTextNode(element) {
    let node = element;
    while(node != null){
        if (node.nodeType === Node.TEXT_NODE) {
            return node;
        }
        node = node.firstChild;
    }
    return null;
}
function getDOMIndexWithinParent(node) {
    const parent = node.parentNode;
    if (parent == null) {
        throw new Error('Should never happen');
    }
    return [
        parent,
        Array.from(parent.childNodes).indexOf(node)
    ];
}
/**
 * Creates a selection range for the DOM.
 * @param editor - The lexical editor.
 * @param anchorNode - The anchor node of a selection.
 * @param _anchorOffset - The amount of space offset from the anchor to the focus.
 * @param focusNode - The current focus.
 * @param _focusOffset - The amount of space offset from the focus to the anchor.
 * @returns The range of selection for the DOM that was created.
 */ function createDOMRange(editor, anchorNode, _anchorOffset, focusNode, _focusOffset) {
    const anchorKey = anchorNode.getKey();
    const focusKey = focusNode.getKey();
    // Resolve through the editor's own document so iframe / shadow-mounted
    // editors don't end up with a Range bound to the wrong realm.
    const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRootOwnerDocument"])(editor.getRootElement()).createRange();
    let anchorDOM = editor.getElementByKey(anchorKey);
    let focusDOM = editor.getElementByKey(focusKey);
    let anchorOffset = _anchorOffset;
    let focusOffset = _focusOffset;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(anchorNode)) {
        anchorDOM = getDOMTextNode(anchorDOM);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(focusNode)) {
        focusDOM = getDOMTextNode(focusDOM);
    }
    if (anchorNode === undefined || focusNode === undefined || anchorDOM === null || focusDOM === null) {
        return null;
    }
    if (anchorDOM.nodeName === 'BR') {
        [anchorDOM, anchorOffset] = getDOMIndexWithinParent(anchorDOM);
    }
    if (focusDOM.nodeName === 'BR') {
        [focusDOM, focusOffset] = getDOMIndexWithinParent(focusDOM);
    }
    const firstChild = anchorDOM.firstChild;
    if (anchorDOM === focusDOM && firstChild != null && firstChild.nodeName === 'BR' && anchorOffset === 0 && focusOffset === 0) {
        focusOffset = 1;
    }
    try {
        range.setStart(anchorDOM, anchorOffset);
        range.setEnd(focusDOM, focusOffset);
    } catch (_e) {
        return null;
    }
    if (range.collapsed && (anchorOffset !== focusOffset || anchorKey !== focusKey)) {
        // Range is backwards, we need to reverse it
        range.setStart(focusDOM, focusOffset);
        range.setEnd(anchorDOM, anchorOffset);
    }
    return range;
}
/**
 * Creates DOMRects, generally used to help the editor find a specific location on the screen.
 * @param editor - The lexical editor
 * @param range - A fragment of a document that can contain nodes and parts of text nodes.
 * @returns The selectionRects as an array.
 */ function createRectsFromDOMRange(editor, range) {
    const rootElement = editor.getRootElement();
    if (rootElement === null) {
        return [];
    }
    const rootRect = rootElement.getBoundingClientRect();
    const computedStyle = getComputedStyle(rootElement);
    const rootPadding = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    const selectionRects = Array.from(range.getClientRects());
    let selectionRectsLength = selectionRects.length;
    //sort rects from top left to bottom right.
    selectionRects.sort((a, b)=>{
        const top = a.top - b.top;
        // Some rects match position closely, but not perfectly,
        // so we give a 3px tolerance.
        if (Math.abs(top) <= 3) {
            return a.left - b.left;
        }
        return top;
    });
    let prevRect;
    for(let i = 0; i < selectionRectsLength; i++){
        const selectionRect = selectionRects[i];
        // Exclude rects that overlap preceding Rects in the sorted list.
        const isOverlappingRect = prevRect && prevRect.top <= selectionRect.top && prevRect.top + prevRect.height > selectionRect.top && prevRect.left + prevRect.width > selectionRect.left;
        // Exclude selections that span the entire element
        const selectionSpansElement = selectionRect.width + rootPadding === rootRect.width;
        if (isOverlappingRect || selectionSpansElement) {
            selectionRects.splice(i--, 1);
            selectionRectsLength--;
            continue;
        }
        prevRect = selectionRect;
    }
    return selectionRects;
}
/**
 * Serializes a style object into a CSS declaration string, the inverse of
 * {@link getStyleObjectFromCSS}.
 * @param styles - An object mapping CSS property names to their values.
 * @returns A CSS string of the form `prop: value;` for each entry, concatenated together.
 */ function getCSSFromStyleObject(styles) {
    let css = '';
    for(const style in styles){
        if (style) {
            css += `${style}: ${styles[style]};`;
        }
    }
    return css;
}
/**
 * Gets the computed DOM styles of the element.
 * @param element - The node to check the styles for.
 * @returns the computed styles of the element or null if there is no DOM element or no default view for the document.
 */ function $getComputedStyleForElement(element) {
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getEditor"])();
    const domElement = editor.getElementByKey(element.getKey());
    if (domElement === null) {
        return null;
    }
    const view = domElement.ownerDocument.defaultView;
    if (view === null) {
        return null;
    }
    return view.getComputedStyle(domElement);
}
/**
 * Gets the computed DOM styles of the parent of the node.
 * @param node - The node to check its parent's styles for.
 * @returns the computed styles of the node, or null if the node has no parent,
 * there is no DOM element, or there is no default view for the document.
 */ function $getComputedStyleForParent(node) {
    // A named-slot value has no parent — it links up to its host through
    // __slotHost — so there is no parent element to measure. Detached nodes are
    // parentless too. Treat both like a missing DOM element rather than
    // throwing; every caller already handles null.
    const parent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRootNode"])(node) ? node : node.getParent();
    return parent && $getComputedStyleForElement(parent);
}
/**
 * Determines whether a node's parent is RTL.
 * @param node - The node to check whether it is RTL.
 * @returns whether the node is RTL.
 */ function $isParentRTL(node) {
    const styles = $getComputedStyleForParent(node);
    return styles !== null && styles.direction === 'rtl';
}
/**
 * Generally used to append text content to HTML and JSON. Grabs the text content and "slices"
 * it to be generated into the new TextNode.
 * @param selection - The selection containing the node whose TextNode is to be edited.
 * @param textNode - The TextNode to be edited.
 * @param mutates - 'clone' to return a clone before mutating, 'self' to update in-place
 * @returns The updated TextNode or clone.
 */ function $sliceSelectedTextNodeContent(selection, textNode, mutates = 'self') {
    const anchorAndFocus = selection.getStartEndPoints();
    if (textNode.isSelected(selection) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTokenOrSegmented"])(textNode) && anchorAndFocus !== null) {
        const [anchor, focus] = anchorAndFocus;
        const isBackward = selection.isBackward();
        const anchorNode = anchor.getNode();
        const focusNode = focus.getNode();
        const isAnchor = textNode.is(anchorNode);
        const isFocus = textNode.is(focusNode);
        if (isAnchor || isFocus) {
            const [anchorOffset, focusOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCharacterOffsets"])(selection);
            const isSame = anchorNode.is(focusNode);
            const isFirst = textNode.is(isBackward ? focusNode : anchorNode);
            const isLast = textNode.is(isBackward ? anchorNode : focusNode);
            let startOffset = 0;
            let endOffset = undefined;
            if (isSame) {
                startOffset = anchorOffset > focusOffset ? focusOffset : anchorOffset;
                endOffset = anchorOffset > focusOffset ? anchorOffset : focusOffset;
            } else if (isFirst) {
                const offset = isBackward ? focusOffset : anchorOffset;
                startOffset = offset;
                endOffset = undefined;
            } else if (isLast) {
                const offset = isBackward ? anchorOffset : focusOffset;
                startOffset = 0;
                endOffset = offset;
            }
            // NOTE: This mutates __text directly because the primary use case is to
            // modify a $cloneWithProperties node that should never be added
            // to the EditorState so we must not call getWritable via setTextContent
            const text = textNode.__text.slice(startOffset, endOffset);
            if (text !== textNode.__text) {
                if (mutates === 'clone') {
                    textNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$cloneWithPropertiesEphemeral"])(textNode);
                }
                textNode.__text = text;
            }
        }
    }
    return textNode;
}
/**
 * Determines if the current selection is at the end of the node.
 * @param point - The point of the selection to test.
 * @returns true if the provided point offset is in the last possible position, false otherwise.
 */ function $isAtNodeEnd(point) {
    if (point.type === 'text') {
        return point.offset === point.getNode().getTextContentSize();
    }
    const node = point.getNode();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
        formatDevErrorMessage(`isAtNodeEnd: node must be a TextNode or ElementNode`);
    }
    return point.offset === node.getChildrenSize();
}
/**
 * Trims text from a node in order to shorten it, eg. to enforce a text's max length. If it deletes text
 * that is an ancestor of the anchor then it will leave 2 indents, otherwise, if no text content exists, it deletes
 * the TextNode. It will move the focus to either the end of any left over text or beginning of a new TextNode.
 * @param editor - The lexical editor.
 * @param anchor - The anchor of the current selection, where the selection should be pointing.
 * @param delCount - The amount of characters to delete. Useful as a dynamic variable eg. textContentSize - maxLength;
 */ function $trimTextContentFromAnchor(editor, anchor, delCount) {
    // Work from the current selection anchor point
    let currentNode = anchor.getNode();
    let remaining = delCount;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode)) {
        const descendantNode = currentNode.getDescendantByIndex(anchor.offset);
        if (descendantNode !== null) {
            currentNode = descendantNode;
        }
    }
    while(remaining > 0 && currentNode !== null){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode)) {
            // Annotation breaks a circular inference through the loop (TS7022),
            // remove when the deprecated generic signatures from #8661 are removed
            const lastDescendant = currentNode.getLastDescendant();
            if (lastDescendant !== null) {
                currentNode = lastDescendant;
            }
        }
        // Annotation breaks a circular inference through the loop (TS7022),
        // remove when the deprecated generic signatures from #8661 are removed
        let nextNode = currentNode.getPreviousSibling();
        let additionalElementWhitespace = 0;
        if (nextNode === null) {
            let parent = currentNode.getParentOrThrow();
            // Annotation breaks a circular inference through the loop (TS7022),
            // remove when the deprecated generic signatures from #8661 are removed
            let parentSibling = parent.getPreviousSibling();
            while(parentSibling === null){
                parent = parent.getParent();
                if (parent === null) {
                    nextNode = null;
                    break;
                }
                parentSibling = parent.getPreviousSibling();
            }
            if (parent !== null) {
                additionalElementWhitespace = parent.isInline() ? 0 : 2;
                nextNode = parentSibling;
            }
        }
        let text = currentNode.getTextContent();
        // If the text is empty, we need to consider adding in two line breaks to match
        // the content if we were to get it from its parent.
        if (text === '' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode) && !currentNode.isInline()) {
            // TODO: should this be handled in core?
            text = '\n\n';
        }
        const currentNodeSize = text.length;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(currentNode) || remaining >= currentNodeSize) {
            const parent = currentNode.getParent();
            currentNode.remove();
            if (parent != null && parent.getChildrenSize() === 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRootNode"])(parent)) {
                parent.remove();
            }
            remaining -= currentNodeSize + additionalElementWhitespace;
            currentNode = nextNode;
        } else {
            const key = currentNode.getKey();
            // See if we can just revert it to what was in the last editor state
            const prevTextContent = editor.read('latest', ()=>{
                const prevNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getNodeByKey"])(key);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(prevNode) && prevNode.isSimpleText()) {
                    return prevNode.getTextContent();
                }
                return null;
            });
            const offset = currentNodeSize - remaining;
            const slicedText = text.slice(0, offset);
            if (prevTextContent !== null && prevTextContent !== text) {
                const prevSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getPreviousSelection"])();
                let target = currentNode;
                if (!currentNode.isSimpleText()) {
                    const textNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createTextNode"])(prevTextContent);
                    currentNode.replace(textNode);
                    target = textNode;
                } else {
                    currentNode.setTextContent(prevTextContent);
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(prevSelection) && prevSelection.isCollapsed()) {
                    const prevOffset = prevSelection.anchor.offset;
                    target.select(prevOffset, prevOffset);
                }
            } else if (currentNode.isSimpleText()) {
                // Split text
                const isSelected = anchor.key === key;
                let anchorOffset = anchor.offset;
                // Move offset to end if it's less than the remaining number, otherwise
                // we'll have a negative splitStart.
                if (anchorOffset < remaining) {
                    anchorOffset = currentNodeSize;
                }
                const splitStart = isSelected ? anchorOffset - remaining : 0;
                const splitEnd = isSelected ? anchorOffset : offset;
                if (isSelected && splitStart === 0) {
                    const [excessNode] = currentNode.splitText(splitStart, splitEnd);
                    excessNode.remove();
                } else {
                    const [, excessNode] = currentNode.splitText(splitStart, splitEnd);
                    excessNode.remove();
                }
            } else {
                const textNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createTextNode"])(slicedText);
                currentNode.replace(textNode);
            }
            remaining = 0;
        }
    }
}
/**
 * @deprecated node styles are parsed on demand and not cached eternally
 */ const $addNodeStyle = warnOnlyOnce('$addNodeStyle is a deprecated no-op and calls should be removed');
/**
 * Applies the provided styles to the given TextNode, ElementNode, or
 * collapsed RangeSelection.
 *
 * @param target - The TextNode, ElementNode, or collapsed RangeSelection to apply the styles to
 * @param patch - The patch to apply, which can include multiple styles. \\{CSSProperty: value\\} . Can also accept a function that returns the new property value.
 */ function $patchStyle(target, patch) {
    if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(target) ? target.isCollapsed() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(target) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(target))) {
        formatDevErrorMessage(`$patchStyle must only be called with a TextNode, ElementNode, or collapsed RangeSelection`);
    }
    const prevStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStyleObjectFromCSS"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(target) ? target.style : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(target) ? target.getStyle() : target.getTextStyle());
    const newStyles = Object.entries(patch).reduce((styles, [key, value])=>{
        if (typeof value === 'function') {
            styles[key] = value(prevStyles[key], target);
        } else if (value === null) {
            delete styles[key];
        } else {
            styles[key] = value;
        }
        return styles;
    }, {
        ...prevStyles
    });
    const newCSSText = getCSSFromStyleObject(newStyles);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(target) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(target)) {
        target.setStyle(newCSSText);
    } else {
        target.setTextStyle(newCSSText);
    }
}
/**
 * Applies the provided styles to the TextNodes in the provided Selection.
 * Will update partially selected TextNodes by splitting the TextNode and applying
 * the styles to the appropriate one.
 * @param selection - The selected node(s) to update.
 * @param patch - The patch to apply, which can include multiple styles. \\{CSSProperty: value\\} . Can also accept a function that returns the new property value.
 */ function $patchStyleText(selection, patch) {
    // Shared with the empty-element loop below so that a node patched here is
    // not patched a second time. A function-valued patch is not idempotent —
    // it is evaluated against the value the previous application wrote.
    const patchedElementKeys = new Set();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.isCollapsed()) {
        $patchStyle(selection, patch);
        const emptyNode = selection.anchor.getNode();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(emptyNode) && emptyNode.isEmpty()) {
            patchedElementKeys.add(emptyNode.getKey());
            $patchStyle(emptyNode, patch);
        }
    }
    $forEachSelectedTextNode((textNode)=>{
        $patchStyle(textNode, patch);
    });
    const nodes = selection.getNodes();
    if (nodes.length > 0) {
        for (const node of nodes){
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node) || !node.canBeEmpty() || node.getChildrenSize() !== 0) {
                continue;
            }
            const key = node.getKey();
            if (patchedElementKeys.has(key)) {
                continue;
            }
            patchedElementKeys.add(key);
            $patchStyle(node, patch);
        }
    }
}
function $forEachSelectedTextNode(fn) {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
    if (!selection) {
        return;
    }
    const slicedTextNodes = new Map();
    const getSliceIndices = (node)=>slicedTextNodes.get(node.getKey()) || [
            0,
            node.getTextContentSize()
        ];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
        for (const slice of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$caretRangeFromSelection"])(selection).getTextSlices()){
            if (slice) {
                slicedTextNodes.set(slice.caret.origin.getKey(), slice.getSliceIndices());
            }
        }
    }
    const selectedNodes = selection.getNodes();
    for (const selectedNode of selectedNodes){
        if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(selectedNode) && selectedNode.canHaveFormat())) {
            continue;
        }
        const [startOffset, endOffset] = getSliceIndices(selectedNode);
        // No actual text is selected, so do nothing.
        if (endOffset === startOffset) {
            continue;
        }
        // The entire node is selected or a token/segment, so just format it
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTokenOrSegmented"])(selectedNode) || startOffset === 0 && endOffset === selectedNode.getTextContentSize()) {
            fn(selectedNode);
        } else {
            // The node is partially selected, so split it into two or three nodes
            // and style the selected one.
            const splitNodes = selectedNode.splitText(startOffset, endOffset);
            const replacement = splitNodes[startOffset === 0 ? 0 : 1];
            fn(replacement);
        }
    }
    // Prior to NodeCaret #7046 this would have been a side-effect
    // so we do this for test compatibility.
    // TODO: we may want to consider simplifying by removing this
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.anchor.type === 'text' && selection.focus.type === 'text' && selection.anchor.key === selection.focus.key) {
        $ensureForwardRangeSelection(selection);
    }
}
/**
 * Ensure that the given RangeSelection is not backwards. If it
 * is backwards, then the anchor and focus points will be swapped
 * in-place. Ensuring that the selection is a writable RangeSelection
 * is the responsibility of the caller (e.g. in a read-only context
 * you will want to clone $getSelection() before using this).
 *
 * @param selection a writable RangeSelection
 */ function $ensureForwardRangeSelection(selection) {
    if (selection.isBackward()) {
        const { anchor, focus } = selection;
        // stash for the in-place swap
        const { key, offset, type } = anchor;
        anchor.set(focus.key, focus.offset, focus.type);
        focus.set(key, offset, type);
    }
}
function $copyBlockFormatIndent(srcNode, destNode) {
    const format = srcNode.getFormatType();
    const indent = srcNode.getIndent();
    if (format !== destNode.getFormatType()) {
        destNode.setFormat(format);
    }
    if (indent !== destNode.getIndent()) {
        destNode.setIndent(indent);
    }
}
/**
 * Determine whether a point sits at the leading ('previous') or trailing
 * ('next') edge of `element`'s content — i.e. there is no content between the
 * point and that edge of the element.
 *
 * This is the caret-based generalization of {@link $isAtNodeEnd}. An empty
 * `element` is considered to be at both of its edges. `@lexical/utils`
 * re-exports this as the direction-specific `$isAtStartOfNode` /
 * `$isAtEndOfNode` helpers.
 *
 * @param point - The point to test.
 * @param element - The ancestor element whose edge is tested.
 * @param direction - 'previous' for the start of `element`, 'next' for the end.
 */ function $isAtEdgeOfElement(point, element, direction) {
    // An extendable TextPointCaret has text remaining in `direction`, so the
    // point is in the middle of a TextNode rather than at the element edge.
    let caret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$caretFromPoint"])(point, direction);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isExtendableTextPointCaret"])(caret)) {
        return false;
    }
    // Walk up towards element: the point is at the edge only when nothing
    // precedes it in `direction` at every level up to element. The match is read
    // from getParentAtCaret (origin.getParent()) rather than from a CaretRange
    // iteration, because iterating ascends via getParentCaret, which stops at the
    // document root and at shadow-root/slot boundaries — so it would never yield
    // `element` when `element` is itself such a boundary (e.g. a named slot's
    // value, a shadow root).
    for(; caret; caret = caret.getParentCaret()){
        const parent = caret.getParentAtCaret();
        if (!parent || caret.getNodeAtCaret()) {
            return false;
        }
        if (element.is(parent)) {
            return true;
        }
    }
    return false;
}
/**
 * Determine whether a point sits at the edge of a block in the given
 * direction: 'previous' for the start of the block, 'next' for the end.
 *
 * Unlike {@link $isAtEdgeOfElement}, an empty block is treated as not being at
 * the edge: when an ElementNode is empty it's not possible to distinguish if
 * the selection's intent is the entire block or the edge so we consider it to
 * be the entire block.
 */ function $isPointAtBlockEdge(point, block, direction) {
    const node = point.getNode();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node) && node.isEmpty()) {
        return false;
    }
    return $isAtEdgeOfElement(point, block, direction);
}
/**
 * Converts all nodes in the selection that are of one block type to another.
 * @param selection - The selected blocks to be converted.
 * @param $createElement - The function that creates the node. eg. $createParagraphNode.
 * @param $afterCreateElement - The function that updates the new node based on the previous one ($copyBlockFormatIndent by default)
 */ function $setBlocksType(selection, $createElement, $afterCreateElement = $copyBlockFormatIndent) {
    if (!selection) {
        return;
    }
    // Selections tend to not include their containing blocks so we effectively
    // expand it here
    const anchorAndFocus = selection.getStartEndPoints();
    let skipFocus = false;
    let focusBlock = null;
    const blockMap = new Map();
    if (anchorAndFocus) {
        const [anchor, focus] = anchorAndFocus;
        const anchorBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])(anchor.getNode(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERNAL_$isBlock"]);
        focusBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])(focus.getNode(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERNAL_$isBlock"]);
        // The focus is the moving edge of the selection, travelling in `direction`
        // (towards the end of the document for a forward selection). When a
        // selection overshoots, its focus lands at the leading edge of focusBlock
        // in that direction — the edge opposite to travel — so focusBlock holds
        // none of the selection and is skipped.
        const direction = selection.isBackward() ? 'previous' : 'next';
        skipFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(focusBlock) && !focusBlock.is(anchorBlock) && $isPointAtBlockEdge(focus, focusBlock, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flipDirection"])(direction));
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(anchorBlock)) {
            blockMap.set(anchorBlock.getKey(), anchorBlock);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(focusBlock) && !skipFocus) {
            blockMap.set(focusBlock.getKey(), focusBlock);
        }
    }
    for (const node of selection.getNodes()){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERNAL_$isBlock"])(node)) {
            if (skipFocus && node.is(focusBlock)) {
                continue;
            }
            blockMap.set(node.getKey(), node);
        } else if (!anchorAndFocus) {
            const ancestorBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])(node, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERNAL_$isBlock"]);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(ancestorBlock)) {
                blockMap.set(ancestorBlock.getKey(), ancestorBlock);
            }
        }
    }
    // Selection remapping is delegated to LexicalNode.replace (and the
    // ListItemNode.replace override): both remap an element-anchored point
    // on the replaced block to {key: replacement, offset: prevSize + offset}.
    for (const prevNode of blockMap.values()){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSlotHost"])(prevNode) !== null) {
            continue;
        }
        const element = $createElement();
        $afterCreateElement(prevNode, element);
        prevNode.replace(element, true);
    }
}
function isPointAttached(point) {
    return point.getNode().isAttached();
}
function $removeParentEmptyElements(startingNode) {
    let node = startingNode;
    while(node !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(node)){
        const latest = node.getLatest();
        // Annotation breaks a circular inference through the loop (TS7022),
        // remove when the deprecated generic signatures from #8661 are removed
        const parentNode = node.getParent();
        if (latest.getChildrenSize() === 0) {
            node.remove(true);
        }
        node = parentNode;
    }
}
/**
 * @deprecated In favor of $setBlockTypes
 * Wraps all nodes in the selection into another node of the type returned by createElement.
 * @param selection - The selection of nodes to be wrapped.
 * @param createElement - A function that creates the wrapping ElementNode. eg. $createParagraphNode.
 * @param wrappingElement - An element to append the wrapped selection and its children to.
 */ function $wrapNodes(selection, createElement, wrappingElement = null) {
    const anchorAndFocus = selection.getStartEndPoints();
    const anchor = anchorAndFocus ? anchorAndFocus[0] : null;
    const nodes = selection.getNodes();
    const nodesLength = nodes.length;
    // A selection inside a bare-block named-slot value has nothing eligible to
    // wrap: the slot value is the only block in its virtual scope and its slot
    // assignment is managed by the node or extension that owns the slot, so
    // this is a no-op (same rule as $setBlocksType). A shadow-root slot value
    // is root-like and wraps its own subtree below, as usual. (A selection
    // never crosses a slot boundary, so checking the anchor covers the whole
    // selection.)
    if (anchor !== null) {
        const slotFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSlotFrame"])(anchor.getNode());
        if (slotFrame !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(slotFrame)) {
            return;
        }
    }
    if (anchor !== null && (nodesLength === 0 || nodesLength === 1 && anchor.type === 'element' && anchor.getNode().getChildrenSize() === 0)) {
        const target = anchor.type === 'text' ? anchor.getNode().getParentOrThrow() : anchor.getNode();
        const children = target.getChildren();
        let element = createElement();
        element.setFormat(target.getFormatType());
        element.setIndent(target.getIndent());
        children.forEach((child)=>element.append(child));
        if (wrappingElement) {
            element = wrappingElement.append(element);
        }
        target.replace(element);
        return;
    }
    let topLevelNode = null;
    let descendants = [];
    for(let i = 0; i < nodesLength; i++){
        const node = nodes[i];
        // Determine whether wrapping has to be broken down into multiple chunks. This can happen if the
        // user selected multiple Root-like nodes that have to be treated separately as if they are
        // their own branch. I.e. you don't want to wrap a whole table, but rather the contents of each
        // of each of the cell nodes.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(node)) {
            $wrapNodesImpl(selection, descendants, descendants.length, createElement, wrappingElement);
            descendants = [];
            topLevelNode = node;
        } else if (topLevelNode === null || topLevelNode !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$hasAncestor"])(node, topLevelNode)) {
            descendants.push(node);
        } else {
            $wrapNodesImpl(selection, descendants, descendants.length, createElement, wrappingElement);
            descendants = [
                node
            ];
        }
    }
    $wrapNodesImpl(selection, descendants, descendants.length, createElement, wrappingElement);
}
/**
 * Wraps each node into a new ElementNode.
 * @param selection - The selection of nodes to wrap.
 * @param nodes - An array of nodes, generally the descendants of the selection.
 * @param nodesLength - The length of nodes.
 * @param createElement - A function that creates the wrapping ElementNode. eg. $createParagraphNode.
 * @param wrappingElement - An element to wrap all the nodes into.
 * @returns
 */ function $wrapNodesImpl(selection, nodes, nodesLength, createElement, wrappingElement = null) {
    if (nodes.length === 0) {
        return;
    }
    const firstNode = nodes[0];
    const elementMapping = new Map();
    const elements = [];
    // The below logic is to find the right target for us to
    // either insertAfter/insertBefore/append the corresponding
    // elements to. This is made more complicated due to nested
    // structures.
    const firstNodeBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(firstNode) ? firstNode : firstNode.getParentOrThrow();
    let target = firstNodeBlock.isInline() ? firstNodeBlock.getParentOrThrow() : firstNodeBlock;
    let targetIsPrevSibling = false;
    while(target !== null){
        // Annotation breaks a circular inference through the loop (TS7022),
        // remove when the deprecated generic signatures from #8661 are removed
        const prevSibling = target.getPreviousSibling();
        if (prevSibling !== null) {
            target = prevSibling;
            targetIsPrevSibling = true;
            break;
        }
        target = target.getParentOrThrow();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(target)) {
            break;
        }
    }
    const emptyElements = new Set();
    // Find any top level empty elements
    for(let i = 0; i < nodesLength; i++){
        const node = nodes[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node) && node.getChildrenSize() === 0) {
            emptyElements.add(node.getKey());
        }
    }
    const movedNodes = new Set();
    // Move out all leaf nodes into our elements array.
    // If we find a top level empty element, also move make
    // an element for that.
    for(let i = 0; i < nodesLength; i++){
        const node = nodes[i];
        let parent = node.getParent();
        if (parent !== null && parent.isInline()) {
            parent = parent.getParent();
        }
        if (parent !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isLeafNode"])(node) && !movedNodes.has(node.getKey())) {
            const parentKey = parent.getKey();
            if (elementMapping.get(parentKey) === undefined) {
                const targetElement = createElement();
                targetElement.setFormat(parent.getFormatType());
                targetElement.setIndent(parent.getIndent());
                elements.push(targetElement);
                elementMapping.set(parentKey, targetElement);
                // Move node and its siblings to the new
                // element.
                const children = parent.getChildren();
                targetElement.splice(targetElement.getChildrenSize(), 0, children);
                for (const child of children){
                    movedNodes.add(child.getKey());
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(child)) {
                        // Skip nested leaf nodes if the parent has already been moved
                        for (const key of child.getChildrenKeys()){
                            movedNodes.add(key);
                        }
                    }
                }
                $removeParentEmptyElements(parent);
            }
        } else if (emptyElements.has(node.getKey())) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
                formatDevErrorMessage(`Expected node in emptyElements to be an ElementNode`);
            }
            const targetElement = createElement();
            targetElement.setFormat(node.getFormatType());
            targetElement.setIndent(node.getIndent());
            elements.push(targetElement);
            node.remove(true);
        }
    }
    if (wrappingElement !== null) {
        for(let i = 0; i < elements.length; i++){
            const element = elements[i];
            wrappingElement.append(element);
        }
    }
    let lastElement = null;
    // If our target is Root-like, let's see if we can re-adjust
    // so that the target is the first child instead.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(target)) {
        if (targetIsPrevSibling) {
            if (wrappingElement !== null) {
                target.insertAfter(wrappingElement);
            } else {
                for(let i = elements.length - 1; i >= 0; i--){
                    const element = elements[i];
                    target.insertAfter(element);
                }
            }
        } else {
            // Capture the narrowed type, the reassignment of target below would
            // otherwise widen it back to LexicalNode
            const rootTarget = target;
            const firstChild = rootTarget.getFirstChild();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(firstChild)) {
                target = firstChild;
            }
            if (firstChild === null) {
                if (wrappingElement) {
                    rootTarget.append(wrappingElement);
                } else {
                    for(let i = 0; i < elements.length; i++){
                        const element = elements[i];
                        rootTarget.append(element);
                        lastElement = element;
                    }
                }
            } else {
                if (wrappingElement !== null) {
                    firstChild.insertBefore(wrappingElement);
                } else {
                    for(let i = 0; i < elements.length; i++){
                        const element = elements[i];
                        firstChild.insertBefore(element);
                        lastElement = element;
                    }
                }
            }
        }
    } else {
        if (wrappingElement) {
            target.insertAfter(wrappingElement);
        } else {
            for(let i = elements.length - 1; i >= 0; i--){
                const element = elements[i];
                target.insertAfter(element);
                lastElement = element;
            }
        }
    }
    const prevSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getPreviousSelection"])();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(prevSelection) && isPointAttached(prevSelection.anchor) && isPointAttached(prevSelection.focus)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setSelection"])(prevSelection.clone());
    } else if (lastElement !== null) {
        lastElement.selectEnd();
    } else {
        selection.dirty = true;
    }
}
/**
 * Tests if the selection's parent element has vertical writing mode.
 * @param selection - The selection whose parent to test.
 * @returns true if the selection's parent has vertical writing mode (writing-mode: vertical-rl), false otherwise.
 */ function $isEditorVerticalOrientation(selection) {
    const computedStyle = $getComputedStyle(selection);
    return computedStyle !== null && computedStyle.writingMode === 'vertical-rl';
}
/**
 * Gets the computed DOM styles of the parent of the selection's anchor node.
 * @param selection - The selection to check the styles for.
 * @returns the computed styles of the node or null if there is no DOM element or no default view for the document.
 */ function $getComputedStyle(selection) {
    const anchorNode = selection.anchor.getNode();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(anchorNode)) {
        return $getComputedStyleForElement(anchorNode);
    }
    return $getComputedStyleForParent(anchorNode);
}
/**
 * Determines if the default character selection should be overridden. Used with DecoratorNodes
 * @param selection - The selection whose default character selection may need to be overridden.
 * @param isBackward - Is the selection backwards (the focus comes before the anchor)?
 * @returns true if it should be overridden, false if not.
 */ function $shouldOverrideDefaultCharacterSelection(selection, isBackward) {
    const isVertical = $isEditorVerticalOrientation(selection);
    // In vertical writing mode, we adjust the direction for correct caret movement
    let adjustedIsBackward = isVertical ? !isBackward : isBackward;
    // In right-to-left writing mode, we invert the direction for correct caret movement
    if ($isParentElementRTL(selection)) {
        adjustedIsBackward = !adjustedIsBackward;
    }
    const focusCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$caretFromPoint"])(selection.focus, adjustedIsBackward ? 'previous' : 'next');
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isExtendableTextPointCaret"])(focusCaret)) {
        return false;
    }
    // At an unmergeable TextNode boundary adjacent to another plain TextNode,
    // override so Lexical's modify() can pre-normalize across inline-grid/flex
    // spans (#7301). Restricted to unmergeable nodes to avoid disrupting
    // format-affinity at normal bold/italic boundaries.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextPointCaret"])(focusCaret) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTabNode"])(focusCaret.origin) && focusCaret.origin.isUnmergeable()) {
        const sibling = focusCaret.getNodeAtCaret();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(sibling) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTabNode"])(sibling)) {
            return true;
        }
    }
    for (const nextCaret of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$extendCaretToRange"])(focusCaret)){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isChildCaret"])(nextCaret)) {
            return !nextCaret.origin.isInline();
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(nextCaret.origin)) {
            continue;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(nextCaret.origin)) {
            return true;
        }
        break;
    }
    return false;
}
/**
 * Moves the selection according to the arguments.
 * @param selection - The selected text or nodes.
 * @param isHoldingShift - Is the shift key being held down during the operation.
 * @param isBackward - Is the selection selected backwards (the focus comes before the anchor)?
 * @param granularity - The distance to adjust the current selection.
 */ function $moveCaretSelection(selection, isHoldingShift, isBackward, granularity) {
    selection.modify(isHoldingShift ? 'extend' : 'move', isBackward, granularity);
}
/**
 * Tests a parent element for right to left direction.
 * @param selection - The selection whose parent is to be tested.
 * @returns true if the selections' parent element has a direction of 'rtl' (right to left), false otherwise.
 */ function $isParentElementRTL(selection) {
    const computedStyle = $getComputedStyle(selection);
    return computedStyle !== null && computedStyle.direction === 'rtl';
}
/**
 * Moves selection by character according to arguments.
 * @param selection - The selection of the characters to move.
 * @param isHoldingShift - Is the shift key being held down during the operation.
 * @param isBackward - Is the selection backward (the focus comes before the anchor)?
 */ function $moveCharacter(selection, isHoldingShift, isBackward) {
    const isRTL = $isParentElementRTL(selection);
    const isVertical = $isEditorVerticalOrientation(selection);
    // In vertical-rl writing mode, arrow key directions need to be flipped
    // to match the visual flow of text (top to bottom, right to left)
    let adjustedIsBackward;
    if (isVertical) {
        // In vertical-rl mode, we need to completely invert the direction
        // Left arrow (backward) should move down (forward)
        // Right arrow (forward) should move up (backward)
        adjustedIsBackward = !isBackward;
    } else if (isRTL) {
        // In horizontal RTL mode, use the standard RTL behavior
        adjustedIsBackward = !isBackward;
    } else {
        // Standard LTR horizontal text
        adjustedIsBackward = isBackward;
    }
    // Apply the direction adjustment to move the caret
    $moveCaretSelection(selection, isHoldingShift, adjustedIsBackward, 'character');
}
/**
 * Returns the current value of a CSS property for Nodes, if set. If not set, it returns the defaultValue.
 * @param node - The node whose style value to get.
 * @param styleProperty - The CSS style property.
 * @param defaultValue - The default value for the property.
 * @returns The value of the property for node.
 */ function $getNodeStyleValueForProperty(node, styleProperty, defaultValue) {
    const css = node.getStyle();
    const styleObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStyleObjectFromCSS"])(css);
    if (styleObject !== null) {
        return styleObject[styleProperty] || defaultValue;
    }
    return defaultValue;
}
/**
 * Returns the current value of a CSS property for TextNodes in the Selection, if set. If not set, it returns the defaultValue.
 * If all TextNodes do not have the same value, it returns an empty string.
 * @param selection - The selection of TextNodes whose value to find.
 * @param styleProperty - The CSS style property.
 * @param defaultValue - The default value for the property, defaults to an empty string.
 * @returns The value of the property for the selected TextNodes.
 */ function $getSelectionStyleValueForProperty(selection, styleProperty, defaultValue = '') {
    let styleValue = null;
    const nodes = selection.getNodes();
    // The anchor/focus boundary handling below is specific to RangeSelection;
    // other selection types (e.g. table) style every node they contain.
    let startNode;
    let endNode;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
        if (selection.isCollapsed() && selection.style !== '') {
            const styleObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStyleObjectFromCSS"])(selection.style);
            if (styleObject !== null && styleProperty in styleObject) {
                return styleObject[styleProperty];
            }
        }
        const { anchor, focus } = selection;
        const isBackward = selection.isBackward();
        const firstNode = isBackward ? focus.getNode() : anchor.getNode();
        const lastNode = isBackward ? anchor.getNode() : focus.getNode();
        const startOffset = isBackward ? focus.offset : anchor.offset;
        const endOffset = isBackward ? anchor.offset : focus.offset;
        // A boundary node contributes no styled text when the selection merely
        // touches its edge: the first node when the start offset is at its very
        // end, and the last node when the end offset is at its very beginning.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(firstNode) && startOffset === firstNode.getTextContentSize()) {
            startNode = firstNode;
        }
        if (endOffset === 0) {
            endNode = lastNode;
        }
    }
    for(let i = 0; i < nodes.length; i++){
        const node = nodes[i];
        // Skip the excluded boundary node for this position (startNode at the
        // head, endNode elsewhere); both are undefined when nothing is excluded.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(node) && !node.is(i === 0 ? startNode : endNode)) {
            const nodeStyleValue = $getNodeStyleValueForProperty(node, styleProperty, defaultValue);
            if (styleValue === null) {
                styleValue = nodeStyleValue;
            } else if (styleValue !== nodeStyleValue) {
                // multiple text nodes are in the selection and they don't all
                // have the same style.
                styleValue = '';
                break;
            }
        }
    }
    return styleValue === null ? defaultValue : styleValue;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /** @deprecated moved to the `lexical` package */ const getStyleObjectFromCSS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStyleObjectFromCSS"];
/** @deprecated renamed to {@link $trimTextContentFromAnchor} by @lexical/eslint-plugin rules-of-lexical */ const trimTextContentFromAnchor = $trimTextContentFromAnchor;
;
}),
"[project]/node_modules/@lexical/utils/dist/LexicalUtils.dev.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$descendantsMatching",
    ()=>$descendantsMatching,
    "$dfs",
    ()=>$dfs,
    "$dfsIterator",
    ()=>$dfsIterator,
    "$dfsWithSlots",
    ()=>$dfsWithSlots,
    "$dfsWithSlotsIterator",
    ()=>$dfsWithSlotsIterator,
    "$filter",
    ()=>$filter,
    "$firstToLastIterator",
    ()=>$firstToLastIterator,
    "$getAdjacentCaret",
    ()=>$getAdjacentCaret,
    "$getDepth",
    ()=>$getDepth,
    "$getNearestBlockElementAncestorOrThrow",
    ()=>$getNearestBlockElementAncestorOrThrow,
    "$getNearestNodeOfType",
    ()=>$getNearestNodeOfType,
    "$getNextRightPreorderNode",
    ()=>$getNextRightPreorderNode,
    "$getNextSiblingOrParentSibling",
    ()=>$getNextSiblingOrParentSibling,
    "$handleIndentAndOutdent",
    ()=>$handleIndentAndOutdent,
    "$insertFirst",
    ()=>$insertFirst,
    "$insertNodeIntoLeaf",
    ()=>$insertNodeIntoLeaf,
    "$insertNodeToNearestRoot",
    ()=>$insertNodeToNearestRoot,
    "$isAtEndOfNode",
    ()=>$isAtEndOfNode,
    "$isAtStartOfNode",
    ()=>$isAtStartOfNode,
    "$isEditorIsNestedEditor",
    ()=>$isEditorIsNestedEditor,
    "$lastToFirstIterator",
    ()=>$lastToFirstIterator,
    "$onEscapeDown",
    ()=>$onEscapeDown,
    "$onEscapeUp",
    ()=>$onEscapeUp,
    "$restoreEditorState",
    ()=>$restoreEditorState,
    "$reverseDfs",
    ()=>$reverseDfs,
    "$reverseDfsIterator",
    ()=>$reverseDfsIterator,
    "$reverseDfsWithSlots",
    ()=>$reverseDfsWithSlots,
    "$reverseDfsWithSlotsIterator",
    ()=>$reverseDfsWithSlotsIterator,
    "$unwrapAndFilterDescendants",
    ()=>$unwrapAndFilterDescendants,
    "$unwrapNode",
    ()=>$unwrapNode,
    "$wrapNodeInElement",
    ()=>$wrapNodeInElement,
    "calculateZoomLevel",
    ()=>calculateZoomLevel,
    "dedupeSelectionRects",
    ()=>dedupeSelectionRects,
    "eventFiles",
    ()=>eventFiles,
    "getScrollParent",
    ()=>getScrollParent,
    "isMimeType",
    ()=>isMimeType,
    "makeStateWrapper",
    ()=>makeStateWrapper,
    "markSelection",
    ()=>markSelection,
    "mediaFileReader",
    ()=>mediaFileReader,
    "objectKlassEquals",
    ()=>objectKlassEquals,
    "positionNodeOnRange",
    ()=>mlcPositionNodeOnRange,
    "registerNestedElementResolver",
    ()=>registerNestedElementResolver,
    "selectionAlwaysOnDisplay",
    ()=>selectionAlwaysOnDisplay
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@lexical/selection/dist/LexicalSelection.dev.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lexical/dist/Lexical.dev.mjs [app-rsc] (ecmascript)");
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Do not require this module directly! Use normal `invariant` calls.
function formatDevErrorMessage(message) {
    throw new Error(message);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Dedupe a list of selection client-rects before they are drawn as fills.
 *
 * `Range.getClientRects()` can return rects that are duplicated or contained
 * within another, and WebKit in particular emits a spurious wider rect alongside
 * the real text rect on some blocks (balanced or letter-spaced headings are the
 * reproducible case). Drawn as semi-transparent fills, duplicates read brighter
 * than a single rect, and the wider rect paints the "extra empty selection area"
 * reported in facebook/lexical#7106.
 *
 * This drops zero-area rects and any rect that contains another, keeping the
 * smaller text-hugging one, with a 1px tolerance for sub-pixel jitter. The
 * assumption is that genuine same-line rects are horizontally disjoint (one rect
 * per visual row; inline boxes on a row tile side by side), so containment only
 * holds for the duplicate or spurious-wider cases, never for a legitimate
 * sub-fragment that should be kept.
 *
 * On the `createRectsFromDOMRange` path (e.g. `positionNodeOnRange`): that
 * helper's own `selectionSpansElement` filter already drops the full-block-width
 * spurious rect, so there this mainly prevents the duplicate-doubling. The #7106
 * extra-area paint is addressed for consumers that feed raw `getClientRects()`,
 * where `selectionSpansElement` does not run — that is the path that needs it.
 *
 * Known limitation: the disjoint assumption holds for normal flow. Overlapping
 * inline content — a negative margin, a transform, or a baseline-shifted inline
 * decorator — can place a real sub-fragment inside a wider real-text rect on the
 * same row; if a sub-pixel top offset also lets both clear
 * `createRectsFromDOMRange`'s asymmetric overlap filter, keep-smaller drops the
 * wider rect and under-paints the glyphs it uniquely covered. There is no
 * rect-only fix: that wider rect is geometrically indistinguishable from the
 * spurious-wider (#7106) rect, so keeping it would re-introduce the extra-area
 * paint. See the under-paint characterization browser test.
 *
 * Typed on the structural subset of `DOMRect` it reads, so it accepts a live
 * `DOMRectList` from `getClientRects()` as well as the `DOMRect[]` returned by
 * `createRectsFromDOMRange`, and is unit-testable without a DOM.
 */ function dedupeSelectionRects(rects) {
    const contains = (a, b)=>b.left >= a.left - 1 && b.top >= a.top - 1 && b.right <= a.right + 1 && b.bottom <= a.bottom + 1;
    const kept = [];
    for (const rect of Array.from(rects)){
        if (rect.width < 0.5 || rect.height < 0.5) {
            continue;
        }
        // `rect` contains a smaller rect already kept: keep the smaller one.
        if (kept.some((keptRect)=>contains(rect, keptRect))) {
            continue;
        }
        // A kept rect contains `rect`: drop the larger, keep the smaller `rect`.
        for(let i = kept.length - 1; i >= 0; i--){
            if (contains(kept[i], rect)) {
                kept.splice(i, 1);
            }
        }
        kept.push(rect);
    }
    return kept;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function px(value) {
    return `${value}px`;
}
const mutationObserverConfig = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
function prependDOMNode(parent, node) {
    parent.insertBefore(node, parent.firstChild);
}
/**
 * Place one or multiple newly created Nodes at the passed Range's position.
 * Multiple nodes will only be created when the Range spans multiple lines (aka
 * client rects).
 *
 * This function can come particularly useful to highlight particular parts of
 * the text without interfering with the EditorState, that will often replicate
 * the state across collab and clipboard.
 *
 * This function accounts for DOM updates which can modify the passed Range.
 * Hence, the function return to remove the listener.
 */ function mlcPositionNodeOnRange(editor, range, onReposition) {
    let rootDOMNode = null;
    let parentDOMNode = null;
    let observer = null;
    let lastNodes = [];
    const wrapperNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRootOwnerDocument"])(editor.getRootElement()).createElement('div');
    wrapperNode.style.position = 'relative';
    function position() {
        if (!(rootDOMNode !== null)) {
            formatDevErrorMessage(`Unexpected null rootDOMNode`);
        }
        if (!(parentDOMNode !== null)) {
            formatDevErrorMessage(`Unexpected null parentDOMNode`);
        }
        const { left: parentLeft, top: parentTop } = parentDOMNode.getBoundingClientRect();
        const rects = dedupeSelectionRects((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRectsFromDOMRange"])(editor, range));
        if (!wrapperNode.isConnected) {
            prependDOMNode(parentDOMNode, wrapperNode);
        }
        let hasRepositioned = false;
        for(let i = 0; i < rects.length; i++){
            const rect = rects[i];
            // Try to reuse the previously created Node when possible, no need to
            // remove/create on the most common case reposition case
            const rectNode = lastNodes[i] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRootOwnerDocument"])(rootDOMNode).createElement('div');
            const rectNodeStyle = rectNode.style;
            if (rectNodeStyle.position !== 'absolute') {
                rectNodeStyle.position = 'absolute';
                hasRepositioned = true;
            }
            const left = px(rect.left - parentLeft);
            if (rectNodeStyle.left !== left) {
                rectNodeStyle.left = left;
                hasRepositioned = true;
            }
            const top = px(rect.top - parentTop);
            if (rectNodeStyle.top !== top) {
                rectNode.style.top = top;
                hasRepositioned = true;
            }
            const width = px(rect.width);
            if (rectNodeStyle.width !== width) {
                rectNode.style.width = width;
                hasRepositioned = true;
            }
            const height = px(rect.height);
            if (rectNodeStyle.height !== height) {
                rectNode.style.height = height;
                hasRepositioned = true;
            }
            if (rectNode.parentNode !== wrapperNode) {
                wrapperNode.append(rectNode);
                hasRepositioned = true;
            }
            lastNodes[i] = rectNode;
        }
        while(lastNodes.length > rects.length){
            const node = lastNodes.pop();
            if (node != null) {
                node.remove();
            }
        }
        if (hasRepositioned) {
            onReposition(lastNodes);
        }
    }
    function stop() {
        parentDOMNode = null;
        rootDOMNode = null;
        if (observer !== null) {
            observer.disconnect();
        }
        observer = null;
        wrapperNode.remove();
        for (const node of lastNodes){
            node.remove();
        }
        lastNodes = [];
    }
    function restart() {
        const currentRootDOMNode = editor.getRootElement();
        if (currentRootDOMNode === null) {
            return stop();
        }
        const currentParentDOMNode = currentRootDOMNode.parentElement;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTMLElement"])(currentParentDOMNode)) {
            return stop();
        }
        stop();
        rootDOMNode = currentRootDOMNode;
        parentDOMNode = currentParentDOMNode;
        observer = new MutationObserver((mutations)=>{
            const nextRootDOMNode = editor.getRootElement();
            const nextParentDOMNode = nextRootDOMNode && nextRootDOMNode.parentElement;
            if (nextRootDOMNode !== rootDOMNode || nextParentDOMNode !== parentDOMNode) {
                return restart();
            }
            for (const mutation of mutations){
                if (!wrapperNode.contains(mutation.target)) {
                    // TODO throttle
                    return position();
                }
            }
        });
        observer.observe(currentParentDOMNode, mutationObserverConfig);
        position();
    }
    // Returning stop() hands the teardown to the root listener registry.
    // registerRootListener runs the previous invocation's cleanup before it
    // re-invokes the listener, and runs it again when the listener is
    // unregistered, so the wrapper element and the MutationObserver never
    // outlive the invocation of restart() that created them. Without a cleanup
    // to call, an invocation that lands after this positionNodeOnRange has
    // already been disposed of (root listeners are triggered from a snapshot of
    // the registry, so a listener removed mid-pass is still called) would leave
    // its wrapper element in the document with nothing left to remove it.
    const removeRootListener = editor.registerRootListener(()=>{
        restart();
        return stop;
    });
    return ()=>{
        removeRootListener();
        stop();
    };
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function $getOrderedSelectionPoints(selection) {
    const points = selection.getStartEndPoints();
    return selection.isBackward() ? [
        points[1],
        points[0]
    ] : points;
}
function $rangeTargetFromPoint(editor, point, node, dom) {
    if (point.type === 'text' || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
        const textDOM = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextNode"])(node) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getDOMTextNode"])(node, dom, editor) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDOMTextNode"])(dom)) || dom;
        return [
            textDOM,
            point.offset
        ];
    } else {
        const slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getDOMSlot"])(node, dom, editor);
        return [
            slot.element,
            slot.getFirstChildOffset() + point.offset
        ];
    }
}
function $rangeFromPoints(editor, start, startNode, startDOM, end, endNode, endDOM) {
    const editorDocument = editor._window ? editor._window.document : document;
    const range = editorDocument.createRange();
    range.setStart(...$rangeTargetFromPoint(editor, start, startNode, startDOM));
    range.setEnd(...$rangeTargetFromPoint(editor, end, endNode, endDOM));
    return range;
}
function defaultOnReposition(domNodes) {
    for (const domNode of domNodes){
        const domNodeStyle = domNode.style;
        if (domNodeStyle.background !== 'Highlight') {
            domNodeStyle.background = 'Highlight';
        }
        if (domNodeStyle.color !== 'HighlightText') {
            domNodeStyle.color = 'HighlightText';
        }
        if (domNodeStyle.marginTop !== px(-1.5)) {
            domNodeStyle.marginTop = px(-1.5);
        }
        if (domNodeStyle.paddingTop !== px(4)) {
            domNodeStyle.paddingTop = px(4);
        }
        if (domNodeStyle.paddingBottom !== px(0)) {
            domNodeStyle.paddingBottom = px(0);
        }
    }
}
/**
 * Place one or multiple newly created Nodes at the current selection. Multiple
 * nodes will only be created when the selection spans multiple lines (aka
 * client rects).
 *
 * This function can come useful when you want to show the selection but the
 * editor has been focused away.
 */ function markSelection(editor, onReposition = defaultOnReposition) {
    let previousAnchorNode = null;
    let previousAnchorNodeDOM = null;
    let previousAnchorOffset = null;
    let previousFocusNode = null;
    let previousFocusNodeDOM = null;
    let previousFocusOffset = null;
    let removeRangeListener = ()=>{};
    function compute(editorState) {
        editorState.read(()=>{
            const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
                // TODO
                previousAnchorNode = null;
                previousAnchorOffset = null;
                previousFocusNode = null;
                previousFocusOffset = null;
                removeRangeListener();
                removeRangeListener = ()=>{};
                return;
            }
            const [start, end] = $getOrderedSelectionPoints(selection);
            const currentStartNode = start.getNode();
            const currentStartNodeKey = currentStartNode.getKey();
            const currentStartOffset = start.offset;
            const currentEndNode = end.getNode();
            const currentEndNodeKey = currentEndNode.getKey();
            const currentEndOffset = end.offset;
            const currentStartNodeDOM = editor.getElementByKey(currentStartNodeKey);
            const currentEndNodeDOM = editor.getElementByKey(currentEndNodeKey);
            const differentStartDOM = previousAnchorNode === null || currentStartNodeDOM !== previousAnchorNodeDOM || currentStartOffset !== previousAnchorOffset || currentStartNodeKey !== previousAnchorNode.getKey();
            const differentEndDOM = previousFocusNode === null || currentEndNodeDOM !== previousFocusNodeDOM || currentEndOffset !== previousFocusOffset || currentEndNodeKey !== previousFocusNode.getKey();
            if ((differentStartDOM || differentEndDOM) && currentStartNodeDOM !== null && currentEndNodeDOM !== null) {
                const range = $rangeFromPoints(editor, start, currentStartNode, currentStartNodeDOM, end, currentEndNode, currentEndNodeDOM);
                removeRangeListener();
                removeRangeListener = mlcPositionNodeOnRange(editor, range, onReposition);
            }
            previousAnchorNode = currentStartNode;
            previousAnchorNodeDOM = currentStartNodeDOM;
            previousAnchorOffset = currentStartOffset;
            previousFocusNode = currentEndNode;
            previousFocusNodeDOM = currentEndNodeDOM;
            previousFocusOffset = currentEndOffset;
        // Pass {editor} so the active editor is set: $rangeTargetFromPoint reads
        // the slot (getFirstChildOffset), which consults the active editor to
        // skip the block cursor.
        }, {
            editor
        });
    }
    compute(editor.getEditorState());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerUpdateListener(({ editorState })=>compute(editorState)), ()=>{
        removeRangeListener();
    });
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function selectionAlwaysOnDisplay(editor, onReposition) {
    let removeSelectionMark = null;
    const onSelectionChange = ()=>{
        const editorRootElement = editor.getRootElement();
        // Read the selection from the editor's own document/window so iframe-
        // mounted editors don't fall back to the global one. The selectionchange
        // listener below is registered on rootElement.ownerDocument, so this
        // matches the event's source.
        const targetWindow = editorRootElement !== null ? editorRootElement.ownerDocument.defaultView : null;
        const domSelection = targetWindow !== null ? targetWindow.getSelection() : null;
        // Shadow-aware anchor so the contains() check below isn't fooled by the
        // retargeted host.
        const domAnchorNode = domSelection !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDOMSelectionPoints"])(domSelection, editorRootElement).anchorNode : null;
        const isSelectionInsideEditor = domAnchorNode !== null && editorRootElement !== null && editorRootElement.contains(domAnchorNode);
        if (isSelectionInsideEditor) {
            if (removeSelectionMark !== null) {
                removeSelectionMark();
                removeSelectionMark = null;
            }
        } else {
            if (removeSelectionMark === null) {
                removeSelectionMark = markSelection(editor, onReposition);
            }
        }
    };
    return editor.registerRootListener((rootElement)=>{
        if (rootElement) {
            const document1 = rootElement.ownerDocument;
            const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeRegister"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerEventListener"])(document1, 'selectionchange', onSelectionChange), ()=>{
                if (removeSelectionMark !== null) {
                    removeSelectionMark();
                }
            });
            onSelectionChange();
            return cleanup;
        }
    });
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Got from https://stackoverflow.com/a/42543908/2013580
/**
 * Walks up from `element` and returns the nearest scrollable ancestor (or
 * `ownerDocument.body` if none is found), used to keep the active typeahead
 * option scrolled into view. Set `includeHidden` to also treat
 * `overflow: hidden` ancestors as scroll parents.
 *
 * The walk crosses ShadowRoot→host (via `getParentElement`) so a
 * shadow-mounted editor's scroll parent is found in the enclosing light-DOM
 * ancestor chain, and the styles / body are resolved through the element's
 * own realm so an iframe-mounted editor stays inside its document.
 */ function getScrollParent(element, includeHidden) {
    // Resolve through the element's own realm so an iframe-mounted editor's
    // scroll parent and computed styles come from its document, not the top one.
    const ownerDocument = element.ownerDocument;
    const win = ownerDocument.defaultView || window;
    let style = win.getComputedStyle(element);
    const excludeStaticParent = style.position === 'absolute';
    const overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
    if (style.position === 'fixed') {
        return ownerDocument.body;
    }
    for(let parent = element; parent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParentElement"])(parent);){
        style = win.getComputedStyle(parent);
        if (excludeStaticParent && style.position === 'static') {
            continue;
        }
        if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) {
            return parent;
        }
    }
    return ownerDocument.body;
}
/**
 * Returns true if the file type matches the types passed within the acceptableMimeTypes array, false otherwise.
 * The types passed must be strings and are CASE-SENSITIVE.
 * eg. if file is of type 'text' and acceptableMimeTypes = ['TEXT', 'IMAGE'] the function will return false.
 * @param file - The file you want to type check.
 * @param acceptableMimeTypes - An array of strings of types which the file is checked against.
 * @returns true if the file is an acceptable mime type, false otherwise.
 */ function isMimeType(file, acceptableMimeTypes) {
    for (const acceptableType of acceptableMimeTypes){
        if (file.type.startsWith(acceptableType)) {
            return true;
        }
    }
    return false;
}
/**
 * Lexical File Reader with:
 *  1. MIME type support
 *  2. batched results (HistoryPlugin compatibility)
 *  3. Order aware (respects the order when multiple Files are passed)
 *
 * const filesResult = await mediaFileReader(files, ['image/']);
 * filesResult.forEach(file => editor.dispatchCommand('INSERT_IMAGE', \\{
 *   src: file.result,
 * \\}));
 */ function mediaFileReader(files, acceptableMimeTypes) {
    const filesIterator = files[Symbol.iterator]();
    return new Promise((resolve, reject)=>{
        const processed = [];
        const handleNextFile = ()=>{
            const { done, value: file } = filesIterator.next();
            if (done) {
                return resolve(processed);
            }
            const fileReader = new FileReader();
            fileReader.addEventListener('error', reject);
            fileReader.addEventListener('load', ()=>{
                const result = fileReader.result;
                if (typeof result === 'string') {
                    processed.push({
                        file,
                        result
                    });
                }
                handleNextFile();
            });
            if (isMimeType(file, acceptableMimeTypes)) {
                fileReader.readAsDataURL(file);
            } else {
                handleNextFile();
            }
        };
        handleNextFile();
    });
}
/**
 * "Depth-First Search" starts at the root/top node of a tree and goes as far as it can down a branch end
 * before backtracking and finding a new path. Consider solving a maze by hugging either wall, moving down a
 * branch until you hit a dead-end (leaf) and backtracking to find the nearest branching path and repeat.
 * It will then return all the nodes found in the search in an array of objects.
 * Preorder traversal is used, meaning that nodes are listed in the order of when they are FIRST encountered.
 *
 * Children-only spine: named slot subtrees are skipped. Use {@link $dfsWithSlots}
 * when you need to descend into slots (e.g. character counting, slot-aware
 * content extraction).
 *
 * @param startNode - The node to start the search (inclusive), if omitted, it will start at the root node.
 * @param endNode - The node to end the search (inclusive), if omitted, it will find all descendants of the startingNode. If endNode
 * is an ElementNode, it will stop before visiting any of its children.
 * @returns An array of objects of all the nodes found by the search, including their depth into the tree.
 * \\{depth: number, node: LexicalNode\\} It will always return at least 1 node (the start node).
 */ function $dfs(startNode, endNode) {
    return Array.from($dfsIterator(startNode, endNode));
}
/**
 * Get the adjacent caret in the same direction
 *
 * @param caret A caret or null
 * @returns `caret.getAdjacentCaret()` or `null`
 */ function $getAdjacentCaret(caret) {
    return caret ? caret.getAdjacentCaret() : null;
}
/**
 * Right-to-left mirror of {@link $dfs}. It returns all the nodes found in the
 * search in an array of objects.
 * Preorder traversal is used, meaning that nodes are listed in the order of when they are FIRST encountered.
 *
 * Children-only spine: named slot subtrees are skipped. Use {@link $reverseDfsWithSlots}
 * when you need to descend into slots (e.g. character counting, slot-aware
 * content extraction).
 *
 * The whole traversal is materialized. Use {@link $reverseDfsIterator} to walk
 * it on the fly with O(1) memory.
 *
 * @param startNode - The node to start the search (inclusive), if omitted, it will start at the root node.
 * @param endNode - The node to end the search (inclusive), if omitted, it will find all descendants of the startingNode. If endNode
 * is an ElementNode, it will stop before visiting any of its children.
 * @returns An array of objects of all the nodes found by the search, including their depth into the tree.
 * \\{depth: number, node: LexicalNode\\} It will always return at least 1 node (the start node).
 */ function $reverseDfs(startNode, endNode) {
    return Array.from($reverseDfsIterator(startNode, endNode));
}
/**
 * $dfs iterator (left to right). Tree traversal is done on the fly as new values are requested with O(1) memory.
 * Preorder traversal is used, meaning that nodes are iterated over in the order of when they are FIRST encountered.
 *
 * Children-only spine: named slot subtrees are skipped. Use {@link $dfsWithSlotsIterator}
 * (or {@link $dfsWithSlots}) when you need to descend into slots — e.g. character
 * counting, content extraction, or any cross-tree analysis where slotted content
 * should be visited.
 *
 * @param startNode - The node to start the search (inclusive), if omitted, it will start at the root node.
 * @param endNode - The node to end the search (inclusive), if omitted, it will find all descendants of the startingNode.
 * If endNode is an ElementNode, the iterator will end as soon as it reaches the endNode (no children will be visited).
 * @returns An iterator, each yielded value is a DFSNode. It will always return at least 1 node (the start node).
 */ function $dfsIterator(startNode, endNode) {
    return $dfsCaretIterator('next', startNode, endNode);
}
/**
 * Like {@link $dfs}, but also descends into named slots. Slots are not on the
 * linked-list spine, so each host's slot subtrees are emitted slots-first,
 * right after the host node and before its linked-list children.
 * @experimental
 * @param startNode - The node to start the search (inclusive), defaults to the root node.
 * @param endNode - The node to end the search (inclusive), defaults to all descendants of startNode.
 * Like {@link $dfs}, reaching endNode stops the traversal before visiting any of its
 * children — including its slot subtrees. An endNode strictly inside a slot subtree
 * is never reached (slot subtrees are spliced in whole), so it does not truncate
 * the traversal.
 * @returns An array of DFSNodes. It will always return at least 1 node (the start node).
 */ function $dfsWithSlots(startNode, endNode) {
    return Array.from($dfsWithSlotsIterator(startNode, endNode));
}
/**
 * Slot-aware {@link $dfsIterator}: a host's slot subtrees are emitted
 * slots-first, right after the host node and before its linked-list children.
 * The caret iterator drives the linked-list spine untouched.
 * @experimental
 * @param startNode - The node to start the search (inclusive), defaults to the root node.
 * @param endNode - The node to end the search (inclusive), defaults to all descendants of startNode.
 * Like {@link $dfs}, reaching endNode stops the traversal before visiting any of its
 * children — including its slot subtrees. An endNode strictly inside a slot subtree
 * is never reached (slot subtrees are spliced in whole), so it does not truncate
 * the traversal.
 * @returns An iterator, each yielded value is a DFSNode. It will always return at least 1 node (the start node).
 */ function* $dfsWithSlotsIterator(startNode, endNode) {
    for (const dfsNode of $dfsCaretIterator('next', startNode, endNode)){
        yield dfsNode;
        const { node, depth } = dfsNode;
        // endNode is an inclusive stop: none of its children are visited, so its
        // slot subtrees must not be either.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isSlotHost"])(node) && !node.is(endNode)) {
            for (const name of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSlotNames"])(node)){
                const slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSlot"])(node, name);
                if (slot !== null) {
                    yield* $dfsSubtreeIterator(slot, depth + 1);
                }
            }
        }
    }
}
/**
 * Slots-first preorder traversal of a self-contained subtree (a slot node and
 * everything it owns). Used to splice slot subtrees into $dfsWithSlotsIterator.
 */ function* $dfsSubtreeIterator(node, depth) {
    yield {
        depth,
        node
    };
    const childDepth = depth + 1;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isSlotHost"])(node)) {
        for (const name of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSlotNames"])(node)){
            const slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSlot"])(node, name);
            if (slot !== null) {
                yield* $dfsSubtreeIterator(slot, childDepth);
            }
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
        for (const child of node.getChildren()){
            yield* $dfsSubtreeIterator(child, childDepth);
        }
    }
}
function $getEndCaret(startNode, direction) {
    const rval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getAdjacentSiblingOrParentSiblingCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(startNode, direction));
    return rval && rval[0];
}
function $dfsCaretIterator(direction, startNode, endNode) {
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getRoot"])();
    const start = startNode || root;
    const startCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(start) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getChildCaret"])(start, direction) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(start, direction);
    const startDepth = $getDepth(start);
    const endCaret = endNode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getAdjacentChildCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getChildCaretOrSelf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(endNode, direction))) || $getEndCaret(endNode, direction) : $getEndCaret(start, direction);
    let depth = startDepth;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeStepwiseIterator"])({
        hasNext: (state)=>state !== null,
        initial: startCaret,
        map: (state)=>({
                depth,
                node: state.origin
            }),
        step: (state)=>{
            if (state.isSameNodeCaret(endCaret)) {
                return null;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isChildCaret"])(state)) {
                depth++;
            }
            const rval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getAdjacentSiblingOrParentSiblingCaret"])(state);
            if (!rval || rval[0].isSameNodeCaret(endCaret)) {
                return null;
            }
            depth += rval[1];
            return rval[0];
        }
    });
}
/**
 * Returns the Node sibling when this exists, otherwise the closest parent sibling. For example
 * R -> P -> T1, T2
 *   -> P2
 * returns T2 for node T1, P2 for node T2, and null for node P2.
 * @param node LexicalNode.
 * @returns An array (tuple) containing the found Lexical node and the depth difference, or null, if this node doesn't exist.
 */ function $getNextSiblingOrParentSibling(node) {
    const rval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getAdjacentSiblingOrParentSiblingCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(node, 'next'));
    return rval && [
        rval[0].origin,
        rval[1]
    ];
}
function $getDepth(node) {
    let depth = -1;
    for(let innerNode = node; innerNode !== null; // A slotted node has no parent; climb its slot host instead.
    innerNode = innerNode.getParent() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSlotHost"])(innerNode)){
        depth++;
    }
    return depth;
}
/**
 * Performs a right-to-left preorder tree traversal.
 * From the starting node it goes to the rightmost child, than backtracks to parent and finds new rightmost path.
 * It will return the next node in traversal sequence after the startingNode.
 * The traversal is similar to $dfs functions above, but the nodes are visited right-to-left, not left-to-right.
 * @param startingNode - The node to start the search.
 * @returns The next node in pre-order right to left traversal sequence or `null`, if the node does not exist
 */ function $getNextRightPreorderNode(startingNode) {
    const startCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getChildCaretOrSelf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(startingNode, 'previous'));
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getAdjacentSiblingOrParentSiblingCaret"])(startCaret, 'root');
    return next && next[0].origin;
}
/**
 * $dfs iterator (right to left). Tree traversal is done on the fly as new values are requested with O(1) memory.
 * @param startNode - The node to start the search, if omitted, it will start at the root node.
 * @param endNode - The node to end the search, if omitted, it will find all descendants of the startingNode.
 * @returns An iterator, each yielded value is a DFSNode. It will always return at least 1 node (the start node).
 */ function $reverseDfsIterator(startNode, endNode) {
    return $dfsCaretIterator('previous', startNode, endNode);
}
/**
 * Like {@link $reverseDfs}, but also descends into named slots. Mirror of
 * {@link $dfsWithSlots}.
 * @experimental
 * @param startNode - The node to start the search (inclusive), defaults to the root node.
 * @param endNode - The node to end the search (inclusive), defaults to all descendants of startNode.
 * Mirroring {@link $dfsWithSlots}, reaching endNode stops the traversal without
 * emitting its slot subtrees. An endNode strictly inside a slot subtree is never
 * reached (slot subtrees are spliced in whole), so it does not truncate the
 * traversal.
 * @returns An array of DFSNodes. It will always return at least 1 node (the start node).
 */ function $reverseDfsWithSlots(startNode, endNode) {
    return Array.from($reverseDfsWithSlotsIterator(startNode, endNode));
}
/**
 * Right-to-left mirror of {@link $dfsWithSlotsIterator}. Forward visits slots
 * before children, so the mirror visits them last: a host's slot subtrees are
 * emitted (in reverse slot order) only once its linked-list subtree is fully
 * traversed. Because the caret spine streams nodes, "left the host subtree" is
 * detected when a node at the host's depth or shallower arrives, flushing the
 * host's pending slots. The caret iterator drives the spine untouched.
 * @experimental
 * @param startNode - The node to start the search (inclusive), defaults to the root node.
 * @param endNode - The node to end the search (inclusive), defaults to all descendants of startNode.
 * Mirroring {@link $dfsWithSlotsIterator}, reaching endNode stops the traversal
 * without emitting its slot subtrees. An endNode strictly inside a slot subtree is
 * never reached (slot subtrees are spliced in whole), so it does not truncate the
 * traversal.
 * @returns An iterator, each yielded value is a DFSNode. It will always return at least 1 node (the start node).
 */ function* $reverseDfsWithSlotsIterator(startNode, endNode) {
    const pending = [];
    for (const dfsNode of $dfsCaretIterator('previous', startNode, endNode)){
        while(pending.length > 0 && dfsNode.depth <= pending[pending.length - 1].depth){
            const host = pending.pop();
            yield* $reverseSlotsOf(host.node, host.depth + 1);
        }
        yield dfsNode;
        const { node, depth } = dfsNode;
        // endNode is an inclusive stop: mirror the forward iterator and leave its
        // slot subtrees unvisited rather than flushing them after the stop.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isSlotHost"])(node) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSlotNames"])(node).length > 0 && !node.is(endNode)) {
            pending.push({
                depth,
                node
            });
        }
    }
    while(pending.length > 0){
        const host = pending.pop();
        yield* $reverseSlotsOf(host.node, host.depth + 1);
    }
}
/** Emit a host's slot subtrees in reverse slot order (mirror of slots-first). */ function* $reverseSlotsOf(host, childDepth) {
    const names = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSlotNames"])(host);
    for(let i = names.length - 1; i >= 0; i--){
        const slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSlot"])(host, names[i]);
        if (slot !== null) {
            yield* $reverseDfsSubtreeIterator(slot, childDepth);
        }
    }
}
/**
 * Right-to-left slots-last preorder of a self-contained subtree: children in
 * reverse order, then slots in reverse order. Mirror of $dfsSubtreeIterator.
 */ function* $reverseDfsSubtreeIterator(node, depth) {
    yield {
        depth,
        node
    };
    const childDepth = depth + 1;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
        const children = node.getChildren();
        for(let i = children.length - 1; i >= 0; i--){
            yield* $reverseDfsSubtreeIterator(children[i], childDepth);
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isSlotHost"])(node)) {
        yield* $reverseSlotsOf(node, childDepth);
    }
}
/**
 * Takes a node and traverses up its ancestors (toward the root node)
 * in order to find a specific type of node.
 * @param node - the node to begin searching.
 * @param klass - an instance of the type of node to look for.
 * @returns the node of type klass that was passed, or null if none exist.
 */ function $getNearestNodeOfType(node, klass) {
    let parent = node;
    while(parent != null){
        if (parent instanceof klass) {
            return parent;
        }
        parent = parent.getParent();
    }
    return null;
}
/**
 * Returns the element node of the nearest ancestor, otherwise throws an error.
 * @param startNode - The starting node of the search
 * @returns The ancestor node found
 */ function $getNearestBlockElementAncestorOrThrow(startNode) {
    const blockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])(startNode, (node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node) && !node.isInline());
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(blockNode)) {
        {
            formatDevErrorMessage(`Expected node ${startNode.__key} to have closest block element node.`);
        }
    }
    return blockNode;
}
/**
 * Attempts to resolve nested element nodes of the same type into a single node of that type.
 * It is generally used for marks/commenting
 * @param editor - The lexical editor
 * @param targetNode - The target for the nested element to be extracted from.
 * @param cloneNode - See {@link $createMarkNode}
 * @param handleOverlap - Handles any overlap between the node to extract and the targetNode
 * @returns The lexical editor
 */ function registerNestedElementResolver(editor, targetNode, cloneNode, handleOverlap) {
    const $isTargetNode = (node)=>{
        return node instanceof targetNode;
    };
    const $findMatch = (node)=>{
        // First validate we don't have any children that are of the target,
        // as we need to handle them first.
        const children = node.getChildren();
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            if ($isTargetNode(child)) {
                return null;
            }
        }
        let parentNode = node;
        let childNode = node;
        while(parentNode !== null){
            childNode = parentNode;
            parentNode = parentNode.getParent();
            if ($isTargetNode(parentNode)) {
                return {
                    child: childNode,
                    parent: parentNode
                };
            }
        }
        return null;
    };
    const $elementNodeTransform = (node)=>{
        const match = $findMatch(node);
        if (match !== null) {
            const { child, parent } = match;
            // Simple path, we can move child out and siblings into a new parent.
            if (child.is(node)) {
                handleOverlap(parent, node);
                const nextSiblings = child.getNextSiblings();
                const nextSiblingsLength = nextSiblings.length;
                parent.insertAfter(child);
                if (nextSiblingsLength !== 0) {
                    const newParent = cloneNode(parent);
                    child.insertAfter(newParent);
                    for(let i = 0; i < nextSiblingsLength; i++){
                        newParent.append(nextSiblings[i]);
                    }
                }
                if (!parent.canBeEmpty() && parent.getChildrenSize() === 0) {
                    parent.remove();
                }
            }
        }
    };
    return editor.registerNodeTransform(targetNode, $elementNodeTransform);
}
/**
 * Clones the editor and marks it as dirty to be reconciled. If there was a selection,
 * it would be set back to its previous state, or null otherwise.
 * @param editor - The lexical editor
 * @param editorState - The editor's state
 */ function $restoreEditorState(editor, editorState) {
    const nodeMap = new Map();
    const activeEditorState = editor._pendingEditorState;
    for (const [key, node] of editorState._nodeMap){
        nodeMap.set(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$cloneWithProperties"])(node));
    }
    if (activeEditorState) {
        activeEditorState._nodeMap = nodeMap;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$fullReconcile"])();
    const selection = editorState._selection;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setSelection"])(selection === null ? null : selection.clone());
}
/**
 * Determine whether anything follows the given caret before the end of its
 * nearest root (see {@link lexical!$isRootOrShadowRoot}).
 */ function $hasContentAfter(caret) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isExtendableTextPointCaret"])(caret) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getAdjacentSiblingOrParentSiblingCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextPointCaret"])(caret) ? caret.getSiblingCaret() : caret, 'shadowRoot') !== null;
}
/**
 * If the selected insertion area is the root/shadow root node (see {@link lexical!$isRootOrShadowRoot}),
 * the node will be appended there, otherwise, it will be inserted before the insertion area.
 * If there is no selection where the node is to be inserted, it will be appended after any current nodes
 * within the tree, as a child of the root node. A paragraph will then be added after the inserted node and selected.
 * @param node - The node to be inserted
 * @returns The node after its insertion
 */ function $insertNodeToNearestRoot(node) {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getPreviousSelection"])();
    let initialCaret;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
        initialCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$caretFromPoint"])(selection.focus, 'next');
    } else {
        if (selection != null) {
            const nodes = selection.getNodes();
            const lastNode = nodes[nodes.length - 1];
            if (lastNode) {
                initialCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(lastNode, 'next');
            }
        }
        initialCaret = initialCaret || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getChildCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getRoot"])(), 'previous').getFlipped().insert((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createParagraphNode"])());
    }
    // Splitting at the end of a block would otherwise leave an empty copy of
    // that block after the inserted node. That empty block is only useful when
    // the insertion point is at the very end of its nearest root, where it is
    // the only place left for the selection to go. Anywhere else it is a
    // spurious extra paragraph (#5433).
    const insertCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$insertNodeToNearestRootAtCaret"])(node, initialCaret, $hasContentAfter(initialCaret) ? {
        $shouldSplit: (_node, edge)=>edge !== 'last'
    } : undefined);
    const adjacent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getAdjacentChildCaret"])(insertCaret);
    const selectionCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isChildCaret"])(adjacent) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$normalizeCaret"])(adjacent) : insertCaret;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setSelectionFromCaretRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCollapsedCaretRange"])(selectionCaret));
    return node.getLatest();
}
/**
 * Inserts a node into leaf — the deepest accessible node at the carriage position
 * @param node - The node to be inserted
 */ function $insertNodeIntoLeaf(node) {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
        if (selection) {
            selection.insertNodes([
                node
            ]);
        }
        return;
    }
    const caretRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$caretRangeFromSelection"])(selection);
    let insertCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCaretRangeInDirection"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$removeTextFromCaretRange"])(caretRange), 'next').anchor;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isTextPointCaret"])(insertCaret)) {
        const nextAnchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$splitAtPointCaretNext"])(insertCaret);
        if (!nextAnchor) {
            return;
        }
        insertCaret = nextAnchor;
    }
    const focus = insertCaret.getFlipped();
    focus.insert(node);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setSelectionFromCaretRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getCaretRange"])(focus, focus));
}
/**
 * Wraps the node into another node created from a createElementNode function, eg. $createParagraphNode
 * @param node - Node to be wrapped.
 * @param createElementNode - Creates a new lexical element to wrap the to-be-wrapped node and returns it.
 * @returns A new lexical element with the previous node appended within (as a child, including its children).
 */ function $wrapNodeInElement(node, createElementNode) {
    const elementNode = createElementNode();
    node.replace(elementNode);
    elementNode.append(node);
    return elementNode;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * @param object = The instance of the type
 * @param objectClass = The class of the type
 * @returns Whether the object is has the same Klass of the objectClass, ignoring the difference across window (e.g. different iframes)
 */ function objectKlassEquals(object, objectClass) {
    if (object == null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(object);
    if (prototype == null || prototype.constructor == null) {
        return false;
    }
    return prototype.constructor.name === objectClass.name;
}
// Clipboard may contain files that we aren't allowed to read. While the event is arguably useless,
// in certain occasions, we want to know whether it was a file transfer, as opposed to text. We
// control this with the first boolean flag.
function eventFiles(event) {
    let dataTransfer = null;
    if (objectKlassEquals(event, DragEvent)) {
        dataTransfer = event.dataTransfer;
    } else if (objectKlassEquals(event, ClipboardEvent)) {
        dataTransfer = event.clipboardData;
    }
    if (dataTransfer === null) {
        return [
            false,
            [],
            false
        ];
    }
    const types = dataTransfer.types;
    const hasFiles = types.includes('Files');
    const hasContent = types.includes('text/html') || types.includes('text/plain');
    return [
        hasFiles,
        Array.from(dataTransfer.files),
        hasContent
    ];
}
/**
 * @deprecated Use Array filter or flatMap
 *
 * Filter the nodes
 * @param nodes Array of nodes that needs to be filtered
 * @param filterFn A filter function that returns node if the current node satisfies the condition otherwise null
 * @returns Array of filtered nodes
 */ function $filter(nodes, filterFn) {
    const result = [];
    for(let i = 0; i < nodes.length; i++){
        const node = filterFn(nodes[i]);
        if (node !== null) {
            result.push(node);
        }
    }
    return result;
}
/**
 * Applies the provided callback to each indentable block element in the Selection
 *
 * @param indentOrOutdent callback for performing the indent or outdent action
 * on a given block element.
 * @returns true if at least one block was handled, false otherwise.
 */ function $handleIndentAndOutdent(indentOrOutdent) {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
        return false;
    }
    const alreadyHandled = new Set();
    const nodes = selection.getNodes();
    for(let i = 0; i < nodes.length; i++){
        const node = nodes[i];
        const key = node.getKey();
        if (alreadyHandled.has(key)) {
            continue;
        }
        const parentBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])(node, (parentNode)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(parentNode) && !parentNode.isInline());
        if (parentBlock === null) {
            continue;
        }
        const parentKey = parentBlock.getKey();
        if (parentBlock.canIndent() && !alreadyHandled.has(parentKey)) {
            alreadyHandled.add(parentKey);
            indentOrOutdent(parentBlock);
        }
    }
    return alreadyHandled.size > 0;
}
/**
 * Appends the node before the first child of the parent node
 * @param parent A parent node
 * @param node Node that needs to be appended
 */ function $insertFirst(parent, node) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getChildCaret"])(parent, 'next').insert(node);
}
let NEEDS_MANUAL_ZOOM = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IS_FIREFOX"] || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CAN_USE_DOM"] ? false : undefined;
function needsManualZoom() {
    if (NEEDS_MANUAL_ZOOM === undefined) {
        // If the browser implements standardized CSS zoom, then the client rect
        // will be wider after zoom is applied
        // https://chromestatus.com/feature/5198254868529152
        // https://github.com/facebook/lexical/issues/6863
        // eslint-disable-next-line no-restricted-syntax
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.opacity = '0';
        div.style.width = '100px';
        div.style.left = '-1000px';
        // eslint-disable-next-line no-restricted-syntax
        document.body.appendChild(div);
        const noZoom = div.getBoundingClientRect();
        div.style.setProperty('zoom', '2');
        NEEDS_MANUAL_ZOOM = div.getBoundingClientRect().width === noZoom.width;
        // eslint-disable-next-line no-restricted-syntax
        document.body.removeChild(div);
    }
    return NEEDS_MANUAL_ZOOM;
}
/**
 * Calculates the zoom level of an element as a result of using
 * css zoom property. For browsers that implement standardized CSS
 * zoom (Firefox, Chrome >= 128), this will always return 1.
 * @param element
 * @param useManualZoom - If true, always use zoom level will be calculated manually, otherwise it will be calculated on as needed basis.
 */ function calculateZoomLevel(element, useManualZoom = false) {
    let zoom = 1;
    if (needsManualZoom() || useManualZoom) {
        // Read styles from the element's own realm so an iframe-mounted editor's
        // zoom isn't computed through the top-level window (cross-realm
        // getComputedStyle can return an empty zoom).
        const win = element && element.ownerDocument.defaultView || window;
        while(element){
            zoom *= Number(win.getComputedStyle(element).getPropertyValue('zoom'));
            element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParentElement"])(element);
        }
    }
    return zoom;
}
/**
 * Checks if the editor is a nested editor created by LexicalNestedComposer
 */ function $isEditorIsNestedEditor(editor) {
    return editor._parentEditor !== null;
}
/**
 * A depth first last-to-first traversal of root that stops at each node that matches
 * $predicate and ensures that its parent is root. This is typically used to discard
 * invalid or unsupported wrapping nodes. For example, a TableNode must only have
 * TableRowNode as children, but an importer might add invalid nodes based on
 * caption, tbody, thead, etc. and this will unwrap and discard those.
 *
 * @param root The root to start the traversal
 * @param $predicate Should return true for nodes that are permitted to be children of root
 * @returns true if this unwrapped or removed any nodes
 */ function $unwrapAndFilterDescendants(root, $predicate) {
    return $unwrapAndFilterDescendantsImpl(root, $predicate, null);
}
function $unwrapAndFilterDescendantsImpl(root, $predicate, $onSuccess) {
    let didMutate = false;
    for (const node of $lastToFirstIterator(root)){
        if ($predicate(node)) {
            if ($onSuccess !== null) {
                $onSuccess(node);
            }
            continue;
        }
        didMutate = true;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
            $unwrapAndFilterDescendantsImpl(node, $predicate, $onSuccess || ((child)=>node.insertAfter(child)));
        }
        node.remove();
    }
    return didMutate;
}
/**
 * A depth first traversal of the children array that stops at and collects
 * each node that `$predicate` matches. This is typically used to discard
 * invalid or unsupported wrapping nodes on a children array in the `after`
 * of an {@link lexical!DOMConversionOutput}. For example, a TableNode must only have
 * TableRowNode as children, but an importer might add invalid nodes based on
 * caption, tbody, thead, etc. and this will unwrap and discard those.
 *
 * This function is read-only and performs no mutation operations, which makes
 * it suitable for import and export purposes but likely not for any in-place
 * mutation. You should use {@link $unwrapAndFilterDescendants} for in-place
 * mutations such as node transforms.
 *
 * @param children The children to traverse
 * @param $predicate Should return true for nodes that are permitted to be children of root
 * @returns The children or their descendants that match $predicate
 */ function $descendantsMatching(children, $predicate) {
    const result = [];
    const stack = Array.from(children).reverse();
    for(let child = stack.pop(); child !== undefined; child = stack.pop()){
        if ($predicate(child)) {
            result.push(child);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isElementNode"])(child)) {
            for (const grandchild of $lastToFirstIterator(child)){
                stack.push(grandchild);
            }
        }
    }
    return result;
}
/**
 * Return an iterator that yields each child of node from first to last, taking
 * care to preserve the next sibling before yielding the value in case the caller
 * removes the yielded node.
 *
 * @param node The node whose children to iterate
 * @returns An iterator of the node's children
 */ function $firstToLastIterator(node) {
    return $childIterator((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getChildCaret"])(node, 'next'));
}
/**
 * Return an iterator that yields each child of node from last to first, taking
 * care to preserve the previous sibling before yielding the value in case the caller
 * removes the yielded node.
 *
 * @param node The node whose children to iterate
 * @returns An iterator of the node's children
 */ function $lastToFirstIterator(node) {
    return $childIterator((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getChildCaret"])(node, 'previous'));
}
function $childIterator(startCaret) {
    const seen = new Set();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeStepwiseIterator"])({
        hasNext: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isSiblingCaret"],
        initial: startCaret.getAdjacentCaret(),
        map: (caret)=>{
            const origin = caret.origin.getLatest();
            if (seen !== null) {
                const key = origin.getKey();
                if (!!seen.has(key)) {
                    formatDevErrorMessage(`$childIterator: Cycle detected, node with key ${String(key)} has already been traversed`);
                }
                seen.add(key);
            }
            return origin;
        },
        step: (caret)=>caret.getAdjacentCaret()
    });
}
/**
 * Replace this node with its children
 *
 * @param node The ElementNode to unwrap and remove
 */ function $unwrapNode(node) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$rewindSiblingCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(node, 'next')).splice(1, node.getChildren());
}
/**
 * A wrapper that creates bound functions and methods for the
 * StateConfig to save some boilerplate when defining methods
 * or exporting only the accessors from your modules rather
 * than exposing the StateConfig directly.
 */ /**
 * EXPERIMENTAL
 *
 * A convenience interface for working with {@link $getState} and
 * {@link $setState}.
 *
 * @param stateConfig The stateConfig to wrap with convenience functionality
 * @returns a StateWrapper
 */ function makeStateWrapper(stateConfig) {
    const $get = (node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getState"])(node, stateConfig);
    const $set = (node, valueOrUpdater)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$setState"])(node, stateConfig, valueOrUpdater);
    return {
        $get,
        $set,
        accessors: [
            $get,
            $set
        ],
        makeGetterMethod: ()=>function $getter() {
                return $get(this);
            },
        makeSetterMethod: ()=>function $setter(valueOrUpdater) {
                return $set(this, valueOrUpdater);
            },
        stateConfig
    };
}
/**
 * Inserts a new paragraph before a container node when the cursor moves outside the container element
 *
 * Intended for use ArrowLeft/ArrowUp keyboard handlers to allow the user to break out
 * of a container node by creating a new paragraph before it.
 *
 * A paragraph is inserted if that the cursor is positioned at the beginning inside the container,
 * and the container itself is the first element in the document and has no preceding sibling
 *
 * When a paragraph is inserted the selection is moved to it and, if the
 * triggering keyboard event is provided, its default action is prevented so
 * the browser does not additionally move the selection. Relying on the native
 * caret movement is not portable: Chromium moves into the freshly inserted
 * paragraph while Firefox leaves the caret inside the container.
 *
 * @param $isContainerNode - Type guard identifying the container node type to escape from.
 * @param event - The keyboard event that triggered the escape, if any. Its
 *   default action is prevented when a paragraph is inserted.
 * @returns `true` if a paragraph was inserted, `false` otherwise.
 */ function $onEscapeUp($isContainerNode, event) {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.isCollapsed()) {
        const containerNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])(selection.anchor.getNode(), $isContainerNode);
        if (containerNode) {
            const parent = containerNode.getParent();
            if (parent !== null && parent.getFirstChild() === containerNode && $isAtStartOfNode(selection.anchor, containerNode)) {
                containerNode.insertBefore((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createParagraphNode"])()).selectEnd();
                if (event) {
                    event.preventDefault();
                }
                return true;
            }
        }
    }
    return false;
}
/**
 * Inserts a new paragraph after a container node when the cursor moves outside the container element
 *
 * Intended for use ArrowRight/ArrowDown keyboard handlers to allow the user to break out
 * of a container node by creating a new paragraph after it.
 *
 * A paragraph is inserted if that the cursor is positioned at the ending inside the container,
 * and the container itself is the last element in the document and has no next sibling
 *
 * When a paragraph is inserted the selection is moved to it and, if the
 * triggering keyboard event is provided, its default action is prevented so
 * the browser does not additionally move the selection. Relying on the native
 * caret movement is not portable: Chromium moves into the freshly inserted
 * paragraph while Firefox leaves the caret inside the container.
 *
 * @param $isContainerNode - Type guard identifying the container node type to escape from.
 * @param event - The keyboard event that triggered the escape, if any. Its
 *   default action is prevented when a paragraph is inserted.
 * @returns `true` if a paragraph was inserted, `false` otherwise.
 */ function $onEscapeDown($isContainerNode, event) {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$getSelection"])();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.isCollapsed()) {
        const containerNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$findMatchingParent"])(selection.anchor.getNode(), $isContainerNode);
        if (containerNode) {
            const parent = containerNode.getParent();
            if (parent !== null && parent.getLastChild() === containerNode && $isAtEndOfNode(selection.anchor, containerNode)) {
                containerNode.insertAfter((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lexical$2f$dist$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$createParagraphNode"])()).selectEnd();
                if (event) {
                    event.preventDefault();
                }
                return true;
            }
        }
    }
    return false;
}
/**
 * Whether the collapsed `point` sits at the very start of `node`'s content —
 * on its first descendant (or on the empty node itself) at offset 0. Shared by
 * {@link $onEscapeUp} and slot-aware variants so the "at the leading edge of a
 * container" test stays in one place.
 */ function $isAtStartOfNode(point, node) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$isAtEdgeOfElement"])(point, node, 'previous');
}
/**
 * Whether the collapsed `point` sits at the very end of `node`'s content — on
 * its last descendant (or on the empty node itself) at that node's end. Shared
 * by {@link $onEscapeDown} and slot-aware variants so the "at the trailing edge
 * of a container" test stays in one place.
 */ function $isAtEndOfNode(point, node) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lexical$2f$selection$2f$dist$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$isAtEdgeOfElement"])(point, node, 'next');
}
;
}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/fields/getFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "getFields",
    ()=>getFields
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$afterRead$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/hooks/afterRead.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$beforeChange$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/hooks/beforeChange.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$normalizeUploadPrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/hooks/normalizeUploadPrefix.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$normalizeUploadPrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$normalizeUploadPrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const getFields = ({ adapter, alwaysInsertFields, collection, disablePayloadAccessControl, generateFileURL, prefix, useCompositePrefixes = false })=>{
    const baseURLField = {
        name: 'url',
        type: 'text',
        admin: {
            hidden: true,
            readOnly: true
        },
        label: 'URL'
    };
    const basePrefixField = {
        name: 'prefix',
        type: 'text',
        admin: {
            hidden: true,
            readOnly: true
        }
    };
    // Unique storage object key
    const baseObjectKeyField = {
        name: '_objectKey',
        type: 'text',
        admin: {
            hidden: true,
            readOnly: true
        }
    };
    const fields = [
        ...collection.fields,
        ...adapter?.fields || []
    ];
    // Inject a hook into all URL fields to generate URLs
    let existingURLFieldIndex = -1;
    const existingURLField = fields.find((existingField, i)=>{
        if ('name' in existingField && existingField.name === 'url') {
            existingURLFieldIndex = i;
            return true;
        }
        return false;
    });
    if (existingURLFieldIndex > -1) {
        fields.splice(existingURLFieldIndex, 1);
    }
    // Only add afterRead hook if adapter is provided
    if (adapter) {
        fields.push({
            ...baseURLField,
            ...existingURLField || {},
            hooks: {
                afterRead: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$afterRead$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAfterReadHook"])({
                        adapter,
                        collection,
                        disablePayloadAccessControl,
                        generateFileURL
                    }),
                    ...existingURLField?.hooks?.afterRead || []
                ],
                beforeChange: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$beforeChange$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBeforeChangeHook"])({
                        adapter,
                        collection,
                        disablePayloadAccessControl,
                        generateFileURL
                    }),
                    ...existingURLField?.hooks?.beforeChange || []
                ]
            }
        });
    } else {
        fields.push({
            ...baseURLField,
            ...existingURLField || {}
        });
    }
    if (typeof collection.upload === 'object' && collection.upload.imageSizes) {
        let existingSizesFieldIndex = -1;
        const existingSizesField = fields.find((existingField, i)=>{
            if ('name' in existingField && existingField.name === 'sizes') {
                existingSizesFieldIndex = i;
                return true;
            }
            return false;
        });
        if (existingSizesFieldIndex > -1) {
            fields.splice(existingSizesFieldIndex, 1);
        }
        const sizesField = {
            ...existingSizesField || {},
            name: 'sizes',
            type: 'group',
            admin: {
                hidden: true
            },
            fields: collection.upload.imageSizes.map((size)=>{
                const existingSizeField = existingSizesField?.fields.find((existingField)=>'name' in existingField && existingField.name === size.name);
                const existingSizeURLField = existingSizeField?.fields.find((existingField)=>'name' in existingField && existingField.name === 'url');
                // Only add afterRead hook if adapter is provided
                const sizeURLField = adapter ? {
                    ...existingSizeURLField || {},
                    ...baseURLField,
                    hooks: {
                        afterRead: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$afterRead$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAfterReadHook"])({
                                adapter,
                                collection,
                                disablePayloadAccessControl,
                                generateFileURL,
                                size
                            }),
                            ...typeof existingSizeURLField === 'object' && 'hooks' in existingSizeURLField && existingSizeURLField?.hooks?.afterRead || []
                        ],
                        beforeChange: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$beforeChange$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBeforeChangeHook"])({
                                adapter,
                                collection,
                                disablePayloadAccessControl,
                                generateFileURL,
                                size
                            }),
                            ...typeof existingSizeURLField === 'object' && 'hooks' in existingSizeURLField && existingSizeURLField?.hooks?.beforeChange || []
                        ]
                    }
                } : {
                    ...existingSizeURLField || {},
                    ...baseURLField
                };
                return {
                    ...existingSizeField,
                    name: size.name,
                    type: 'group',
                    fields: [
                        ...adapter?.fields || [],
                        sizeURLField
                    ]
                };
            })
        };
        fields.push(sizesField);
    }
    // If prefix is enabled or alwaysInsertFields is true, save it to db
    if (typeof prefix !== 'undefined' || alwaysInsertFields) {
        let existingPrefixFieldIndex = -1;
        const existingPrefixField = fields.find((existingField, i)=>{
            if ('name' in existingField && existingField.name === 'prefix') {
                existingPrefixFieldIndex = i;
                return true;
            }
            return false;
        });
        if (existingPrefixFieldIndex > -1) {
            fields.splice(existingPrefixFieldIndex, 1);
        }
        fields.push({
            ...basePrefixField,
            ...existingPrefixField || {},
            defaultValue: existingPrefixField?.defaultValue ?? (useCompositePrefixes ? '' : prefix ? __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].posix.join(prefix) : ''),
            hooks: {
                ...existingPrefixField?.hooks,
                beforeChange: [
                    ...existingPrefixField?.hooks?.beforeChange || [],
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$normalizeUploadPrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNormalizeUploadPrefixFieldHook"])({
                        collectionPrefix: prefix,
                        useCompositePrefixes
                    })
                ]
            }
        });
    }
    const existingObjectKeyFieldIndex = fields.findIndex((existingField)=>'name' in existingField && existingField.name === '_objectKey');
    if (existingObjectKeyFieldIndex > -1) {
        fields.splice(existingObjectKeyFieldIndex, 1);
    }
    fields.push({
        ...baseObjectKeyField
    });
    return fields;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/hooks/afterChange.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "getAfterChangeHook",
    ()=>getAfterChangeHook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildPrefixWithObjectKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/buildPrefixWithObjectKey.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/buildStoragePathData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$getIncomingFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/getIncomingFiles.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
// The object's folder: semantic prefix + `_objectKey` segment.
const getObjectFolder = (doc)=>{
    const record = doc ?? {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildPrefixWithObjectKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPrefixWithObjectKey"])({
        objectKey: record._objectKey,
        prefix: record.prefix
    });
};
const getAfterChangeHook = ({ adapter, collection, collectionPrefix, useCompositePrefixes })=>async ({ doc, operation, previousDoc, req })=>{
        // Skip if this is an internal update to prevent infinite loop
        if (req.context?.skipCloudStorage) {
            return doc;
        }
        const isDraftSave = doc._status === 'draft';
        const isDraftOverPublished = isDraftSave && previousDoc?._status === 'published';
        try {
            const files = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$getIncomingFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIncomingFiles"])({
                data: doc,
                req
            });
            if (files.length > 0) {
                // Fold `_objectKey` so generated sizes land in the same folder as the original.
                const dataForUpload = {
                    ...doc,
                    prefix: getObjectFolder(doc)
                };
                const uploadResults = await Promise.all(files // Files with a clientUploadContext are already in storage (uploaded
                // directly by the browser), so skip re-uploading them here.
                .filter((file)=>!file.clientUploadContext).map((file)=>adapter.handleUpload({
                        clientUploadContext: file.clientUploadContext,
                        collection,
                        data: dataForUpload,
                        file,
                        req,
                        storageFilePath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildUploadStoragePathData"])({
                            collectionPrefix,
                            docPrefix: dataForUpload.prefix,
                            filename: file.filename,
                            useCompositePrefixes
                        }).storageFilePath
                    })));
                const uploadMetadata = uploadResults.filter((result)=>result != null && typeof result === 'object').reduce((acc, metadata)=>({
                        ...acc,
                        ...metadata
                    }), {});
                // Adapters may echo `data` back as metadata; keep the document's own `prefix`/`_objectKey`.
                delete uploadMetadata.prefix;
                delete uploadMetadata._objectKey;
                let docWithMetadata = doc;
                if (Object.keys(uploadMetadata).length > 0) {
                    if (!req.context) {
                        req.context = {};
                    }
                    req.context.skipCloudStorage = true;
                    // Clear to prevent re-processing
                    req.file = undefined;
                    req.payloadUploadSizes = undefined;
                    try {
                        await req.payload.update({
                            id: doc.id,
                            collection: collection.slug,
                            data: uploadMetadata,
                            depth: 0,
                            draft: isDraftSave,
                            req
                        });
                    } finally{
                        delete req.context.skipCloudStorage;
                    }
                    docWithMetadata = {
                        ...doc,
                        ...uploadMetadata
                    };
                }
                // Delete previous files only after the new upload and metadata
                // persistence have succeeded. Deleting earlier would orphan the
                // record if a later step throws (e.g. a user-defined afterChange
                // hook on the same collection).
                if (previousDoc && operation === 'update' && !isDraftOverPublished) {
                    let filesToDelete = [];
                    if (typeof previousDoc?.filename === 'string') {
                        filesToDelete.push(previousDoc.filename);
                    }
                    if (typeof previousDoc.sizes === 'object') {
                        filesToDelete = filesToDelete.concat(Object.values(previousDoc?.sizes || []).map((resizedFileData)=>resizedFileData?.filename));
                    }
                    // Compare full locations: a replacement can reuse a filename while moving
                    // a legacy object beneath the collection prefix.
                    const newFilenames = new Set();
                    if (typeof docWithMetadata.filename === 'string') {
                        newFilenames.add(docWithMetadata.filename);
                    }
                    if (typeof docWithMetadata.sizes === 'object') {
                        for (const size of Object.values(docWithMetadata.sizes || {})){
                            if (size?.filename && typeof size.filename === 'string') {
                                newFilenames.add(size.filename);
                            }
                        }
                    }
                    // Resolve each object's real location, folding `_objectKey` so a client-uploaded
                    // original is compared and deleted at `prefix/_objectKey/filename`.
                    const resolveKey = ({ data, filename })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildStoragePathData"])({
                            collectionPrefix,
                            docPrefix: getObjectFolder(data),
                            filename,
                            useCompositePrefixes
                        }).storageFilePath;
                    const newKeys = new Set([
                        ...newFilenames
                    ].map((filename)=>resolveKey({
                            data: docWithMetadata,
                            filename
                        })));
                    const deletionPromises = filesToDelete.map(async (filename)=>{
                        if (!filename) {
                            return;
                        }
                        const storageFilePath = resolveKey({
                            data: previousDoc,
                            filename
                        });
                        if (!newKeys.has(storageFilePath)) {
                            await adapter.handleDelete({
                                collection,
                                doc: previousDoc,
                                filename,
                                req,
                                storageFilePath
                            });
                        }
                    });
                    await Promise.all(deletionPromises);
                }
                if (docWithMetadata !== doc) {
                    return docWithMetadata;
                }
            }
        } catch (err) {
            req.payload.logger.error(`There was an error while uploading files corresponding to the collection ${collection.slug} with filename ${doc.filename}:`);
            req.payload.logger.error({
                err
            });
            throw err;
        }
        return doc;
    };
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/hooks/afterDelete.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "getAfterDeleteHook",
    ()=>getAfterDeleteHook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildPrefixWithObjectKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/buildPrefixWithObjectKey.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/buildStoragePathData.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const getAfterDeleteHook = ({ adapter, collection, collectionPrefix, useCompositePrefixes })=>{
    return async ({ doc, req })=>{
        try {
            // Fold `_objectKey` so deletes target the real object folder.
            const docPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildPrefixWithObjectKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPrefixWithObjectKey"])({
                objectKey: doc._objectKey,
                prefix: doc.prefix
            });
            const filesToDelete = [
                doc.filename,
                ...Object.values(doc?.sizes || []).map((resizedFileData)=>resizedFileData?.filename)
            ];
            const promises = filesToDelete.map(async (filename)=>{
                if (filename) {
                    const { storageFilePath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildStoragePathData"])({
                        collectionPrefix,
                        docPrefix,
                        filename,
                        useCompositePrefixes
                    });
                    await adapter.handleDelete({
                        collection,
                        doc,
                        filename,
                        req,
                        storageFilePath
                    });
                }
            });
            await Promise.all(promises);
        } catch (err) {
            req.payload.logger.error({
                err,
                msg: `There was an error while deleting files corresponding to the ${collection.labels?.singular} with ID ${doc.id}.`
            });
        }
        return doc;
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/hooks/afterRead.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAfterReadHook",
    ()=>getAfterReadHook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildPrefixWithObjectKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/buildPrefixWithObjectKey.js [app-rsc] (ecmascript)");
;
// The object's folder: semantic prefix + `_objectKey` segment.
const getObjectFolder = (data)=>{
    const record = data ?? {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildPrefixWithObjectKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPrefixWithObjectKey"])({
        objectKey: record._objectKey,
        prefix: record.prefix
    });
};
const getAfterReadHook = ({ adapter, collection, disablePayloadAccessControl, generateFileURL, size })=>async ({ data, value })=>{
        const filename = size ? data?.sizes?.[size.name]?.filename : data?.filename;
        const prefix = data?.prefix;
        // Direct-serve URLs encode the full location; the proxy resolves `_objectKey` server-side.
        const objectFolder = getObjectFolder(data);
        let url = value;
        if (filename) {
            if (generateFileURL) {
                url = await generateFileURL({
                    collection,
                    filename,
                    prefix: objectFolder,
                    size
                });
            } else if (disablePayloadAccessControl && adapter.generateURL) {
                url = await adapter.generateURL({
                    collection,
                    data,
                    filename,
                    prefix: objectFolder
                });
            } else if (url && prefix) {
                const separator = url.includes('?') ? '&' : '?';
                url = `${url}${separator}prefix=${encodeURIComponent(prefix)}`;
            }
        }
        return url;
    };
}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/hooks/beforeChange.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBeforeChangeHook",
    ()=>getBeforeChangeHook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildPrefixWithObjectKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/buildPrefixWithObjectKey.js [app-rsc] (ecmascript)");
;
// The object's folder: semantic prefix + `_objectKey` segment.
const getObjectFolder = (data, originalDoc)=>{
    const source = data ?? originalDoc ?? {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildPrefixWithObjectKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPrefixWithObjectKey"])({
        objectKey: source._objectKey,
        prefix: source.prefix
    });
};
const getBeforeChangeHook = ({ adapter, collection, disablePayloadAccessControl, generateFileURL, size })=>async ({ data, originalDoc, value })=>{
        const newFilename = size ? data?.sizes?.[size.name]?.filename : data?.filename;
        const originalFilename = size ? originalDoc?.sizes?.[size.name]?.filename : originalDoc?.filename;
        const filename = newFilename || originalFilename;
        const prefix = getObjectFolder(data, originalDoc);
        let url = value;
        if (generateFileURL && filename) {
            url = await generateFileURL({
                collection,
                filename,
                prefix,
                size
            });
        } else if (disablePayloadAccessControl && filename && adapter.generateURL) {
            url = await adapter.generateURL({
                collection,
                data: data || originalDoc,
                filename,
                prefix
            });
        }
        return url;
    };
}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/hooks/normalizeUploadPrefix.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "getNormalizeUploadPrefixFieldHook",
    ()=>getNormalizeUploadPrefixFieldHook,
    "getNormalizeUploadPrefixHook",
    ()=>getNormalizeUploadPrefixHook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/buildStoragePathData.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
/**
 * A prefix the caller did not supply, or supplied unchanged, is left as stored so
 * pre-upgrade files keep resolving to their original object keys. Anything the caller
 * chooses is contained, because `prefix` is writable through the REST, GraphQL and
 * Local APIs and the read path trusts whatever is persisted.
 */ const isPrefixSupplied = ({ storedPrefix, value })=>typeof value === 'string' && value !== (typeof storedPrefix === 'string' ? storedPrefix : '');
const getNormalizeUploadPrefixHook = ({ collectionPrefix, useCompositePrefixes })=>({ data, originalDoc, req })=>{
        if (req.context?.skipCloudStorage) {
            return data;
        }
        if (!req.file && !isPrefixSupplied({
            storedPrefix: originalDoc?.prefix,
            value: data.prefix
        })) {
            return data;
        }
        data.prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildUploadPrefix"])({
            collectionPrefix,
            docPrefix: typeof data.prefix === 'string' ? data.prefix : '',
            useCompositePrefixes
        }).sanitizedDocPrefix;
        return data;
    };
const getNormalizeUploadPrefixFieldHook = ({ collectionPrefix, useCompositePrefixes })=>({ previousValue, req, value })=>{
        if (req.context?.skipCloudStorage) {
            return value;
        }
        if (!req.file && !isPrefixSupplied({
            storedPrefix: previousValue,
            value
        })) {
            return value;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildUploadPrefix"])({
            collectionPrefix,
            docPrefix: typeof value === 'string' ? value : '',
            useCompositePrefixes
        }).sanitizedDocPrefix;
    };
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/hooks/preserveFileData.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Preserves req.file in req.context and ensures nested calls don't overwrite the original file data.
 */ __turbopack_context__.s([
    "getPreserveFileDataHook",
    ()=>getPreserveFileDataHook
]);
const getPreserveFileDataHook = ()=>({ req })=>{
        if (req.file && !req.context?._payloadCloudStorage) {
            req.context = req.context || {};
            req.context._payloadCloudStorage = {
                file: req.file,
                uploadSizes: req.payloadUploadSizes
            };
        }
    };
}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/plugin.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "cloudStoragePlugin",
    ()=>cloudStoragePlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$fields$2f$getFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/fields/getFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$afterChange$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/hooks/afterChange.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$afterDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/hooks/afterDelete.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$normalizeUploadPrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/hooks/normalizeUploadPrefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$preserveFileData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/hooks/preserveFileData.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$fields$2f$getFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$afterChange$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$afterDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$normalizeUploadPrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$fields$2f$getFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$afterChange$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$afterDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$normalizeUploadPrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const cloudStoragePlugin = (pluginOptions)=>(incomingConfig)=>{
        const { alwaysInsertFields, collections: allCollectionOptions, enabled, useCompositePrefixes } = pluginOptions;
        const config = {
            ...incomingConfig
        };
        // If disabled but alwaysInsertFields is true, only insert fields without full plugin functionality
        if (enabled === false) {
            if (alwaysInsertFields) {
                return {
                    ...config,
                    collections: (config.collections || []).map((existingCollection)=>{
                        const options = allCollectionOptions[existingCollection.slug];
                        if (options) {
                            // If adapter is provided, use it to get fields
                            const adapter = options.adapter ? options.adapter({
                                collection: existingCollection,
                                prefix: options.prefix
                            }) : undefined;
                            const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$fields$2f$getFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFields"])({
                                adapter,
                                alwaysInsertFields: true,
                                collection: existingCollection,
                                disablePayloadAccessControl: options.disablePayloadAccessControl,
                                generateFileURL: options.generateFileURL,
                                prefix: options.prefix,
                                useCompositePrefixes
                            });
                            return {
                                ...existingCollection,
                                fields
                            };
                        }
                        return existingCollection;
                    })
                };
            }
            return config;
        }
        const initFunctions = [];
        return {
            ...config,
            collections: (config.collections || []).map((existingCollection)=>{
                const options = allCollectionOptions[existingCollection.slug];
                if (options?.adapter) {
                    const adapter = options.adapter({
                        collection: existingCollection,
                        prefix: options.prefix
                    });
                    if (adapter.onInit) {
                        initFunctions.push(adapter.onInit);
                    }
                    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$fields$2f$getFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFields"])({
                        adapter,
                        alwaysInsertFields,
                        collection: existingCollection,
                        disablePayloadAccessControl: options.disablePayloadAccessControl,
                        generateFileURL: options.generateFileURL,
                        prefix: options.prefix,
                        useCompositePrefixes
                    });
                    const handlers = [
                        ...typeof existingCollection.upload === 'object' && Array.isArray(existingCollection.upload.handlers) ? existingCollection.upload.handlers : []
                    ];
                    if (!options.disablePayloadAccessControl) {
                        handlers.push(adapter.staticHandler);
                    // Else if disablePayloadAccessControl: true and clientUploads is used
                    // Build the "proxied" handler that responses only when the file was requested by client upload in addDataAndFileToRequest
                    } else if (adapter.clientUploads) {
                        handlers.push((req, args)=>{
                            if ('clientUploadContext' in args.params) {
                                return adapter.staticHandler(req, args);
                            }
                        });
                    }
                    const getSkipSafeFetchSetting = ()=>{
                        const isBooleanTrueSkipSafeFetch = typeof existingCollection.upload === 'object' && existingCollection.upload.skipSafeFetch === true;
                        const isAllowListSkipSafeFetch = typeof existingCollection.upload === 'object' && Array.isArray(existingCollection.upload.skipSafeFetch);
                        if (isBooleanTrueSkipSafeFetch) {
                            return true;
                        } else if (isAllowListSkipSafeFetch) {
                            const existingSkipSafeFetch = typeof existingCollection.upload === 'object' && Array.isArray(existingCollection.upload.skipSafeFetch) ? existingCollection.upload.skipSafeFetch : [];
                            const hasExactLocalhostMatch = existingSkipSafeFetch.some((entry)=>{
                                const entryKeys = Object.keys(entry);
                                return entryKeys.length === 1 && entry.hostname === 'localhost';
                            });
                            const localhostEntry = ("TURBOPACK compile-time value", "development") !== 'production' && !hasExactLocalhostMatch ? [
                                {
                                    hostname: 'localhost'
                                }
                            ] : [];
                            return [
                                ...existingSkipSafeFetch,
                                ...localhostEntry
                            ];
                        }
                        if ("TURBOPACK compile-time truthy", 1) {
                            return [
                                {
                                    hostname: 'localhost'
                                }
                            ];
                        }
                        //TURBOPACK unreachable
                        ;
                    };
                    return {
                        ...existingCollection,
                        fields,
                        hooks: {
                            ...existingCollection.hooks || {},
                            afterChange: [
                                ...existingCollection.hooks?.afterChange || [],
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$afterChange$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAfterChangeHook"])({
                                    adapter,
                                    collection: existingCollection,
                                    collectionPrefix: options.prefix,
                                    useCompositePrefixes
                                })
                            ],
                            afterDelete: [
                                ...existingCollection.hooks?.afterDelete || [],
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$afterDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAfterDeleteHook"])({
                                    adapter,
                                    collection: existingCollection,
                                    collectionPrefix: options.prefix,
                                    useCompositePrefixes
                                })
                            ],
                            beforeChange: [
                                ...existingCollection.hooks?.beforeChange || [],
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$normalizeUploadPrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNormalizeUploadPrefixHook"])({
                                    collectionPrefix: options.prefix,
                                    useCompositePrefixes
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$hooks$2f$preserveFileData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPreserveFileDataHook"])()
                            ]
                        },
                        upload: {
                            ...typeof existingCollection.upload === 'object' ? existingCollection.upload : {},
                            adapter: adapter.name,
                            disableLocalStorage: typeof options.disableLocalStorage === 'boolean' ? options.disableLocalStorage : true,
                            handlers,
                            requiresClientUploadReceipt: adapter.requiresClientUploadReceipt,
                            skipSafeFetch: getSkipSafeFetchSetting()
                        }
                    };
                }
                return existingCollection;
            }),
            onInit: async (payload)=>{
                // Await each init so a provisioning failure fails Payload startup
                // instead of becoming an unhandled rejection.
                await Promise.all(initFunctions.map((fn)=>fn()));
                if (config.onInit) {
                    await config.onInit(payload);
                }
            }
        };
    };
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/buildPrefixWithObjectKey.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildPrefixWithObjectKey",
    ()=>buildPrefixWithObjectKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$sanitizePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/sanitizePrefix.js [app-rsc] (ecmascript)");
;
const buildPrefixWithObjectKey = ({ objectKey, prefix })=>{
    const safePrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$sanitizePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePrefix"])(prefix ?? '');
    const safeObjectKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$sanitizePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePrefix"])(objectKey ?? '');
    if (safePrefix && safeObjectKey) {
        return `${safePrefix}/${safeObjectKey}`;
    }
    return safePrefix || safeObjectKey;
};
}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/buildStoragePathData.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "buildStoragePathData",
    ()=>buildStoragePathData,
    "buildUploadPrefix",
    ()=>buildUploadPrefix,
    "buildUploadStoragePathData",
    ()=>buildUploadStoragePathData,
    "isStoragePathWithinCollectionPrefix",
    ()=>isStoragePathWithinCollectionPrefix
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$sanitizePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/sanitizePrefix.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function isStoragePathWithinCollectionPrefix({ collectionPrefix, docPrefix }) {
    const safeCollectionPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$sanitizePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePrefix"])(collectionPrefix || '');
    return !safeCollectionPrefix || docPrefix === safeCollectionPrefix || docPrefix.startsWith(`${safeCollectionPrefix}/`);
}
function buildUploadPrefix({ collectionPrefix, docPrefix, useCompositePrefixes = false }) {
    const safeCollectionPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$sanitizePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePrefix"])(collectionPrefix || '');
    const safeDocPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$sanitizePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePrefix"])(docPrefix || '');
    const uploadPrefix = safeDocPrefix && !isStoragePathWithinCollectionPrefix({
        collectionPrefix: safeCollectionPrefix,
        docPrefix: safeDocPrefix
    }) ? __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].posix.join(safeCollectionPrefix, safeDocPrefix) : safeDocPrefix || safeCollectionPrefix;
    return {
        sanitizedCollectionPrefix: safeCollectionPrefix,
        sanitizedDocPrefix: !useCompositePrefixes && safeDocPrefix ? uploadPrefix : safeDocPrefix,
        uploadPrefix
    };
}
function buildUploadStoragePathData({ collectionPrefix, docPrefix, filename, useCompositePrefixes = false }) {
    const { sanitizedCollectionPrefix, sanitizedDocPrefix, uploadPrefix } = buildUploadPrefix({
        collectionPrefix,
        docPrefix,
        useCompositePrefixes
    });
    const safeFilename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["sanitizeFilename"])(filename);
    const storageFilePath = useCompositePrefixes ? __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].posix.join(sanitizedCollectionPrefix, sanitizedDocPrefix, safeFilename) : __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].posix.join(uploadPrefix, safeFilename);
    return {
        fileKey: storageFilePath,
        sanitizedCollectionPrefix,
        sanitizedDocPrefix,
        sanitizedFilename: safeFilename,
        storageFilePath
    };
}
function buildStoragePathData({ collectionPrefix, docPrefix, filename, useCompositePrefixes = false }) {
    const sanitizedCollectionPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$sanitizePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePrefix"])(collectionPrefix || '');
    const sanitizedDocPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$sanitizePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePrefix"])(docPrefix || '');
    const sanitizedFilename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["sanitizeFilename"])(filename);
    const storageFilePath = useCompositePrefixes ? __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].posix.join(sanitizedCollectionPrefix, sanitizedDocPrefix, sanitizedFilename) : __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].posix.join(sanitizedDocPrefix || sanitizedCollectionPrefix, sanitizedFilename);
    return {
        fileKey: storageFilePath,
        sanitizedCollectionPrefix,
        sanitizedDocPrefix,
        sanitizedFilename,
        storageFilePath
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/getFilePrefix.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "getFilePrefix",
    ()=>getFilePrefix,
    "getStorageFilePath",
    ()=>getStorageFilePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildPrefixWithObjectKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/buildPrefixWithObjectKey.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/buildStoragePathData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$sanitizePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/sanitizePrefix.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function getFilePrefix({ clientUploadContext, collection, collectionPrefix, doc, filename, prefixQueryParam, req, useCompositePrefixes = false }) {
    // The serve path already loaded and authorized this document — trust it over any
    // client-supplied upload context or query prefix.
    if (doc) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildPrefixWithObjectKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPrefixWithObjectKey"])({
            objectKey: doc._objectKey,
            prefix: doc.prefix
        });
    }
    // Client uploads call handlers without a document yet. Re-contain the claimed
    // prefix — it hasn't been verified against a signed receipt by every adapter.
    if (clientUploadContext && typeof clientUploadContext === 'object' && 'prefix' in clientUploadContext && typeof clientUploadContext.prefix === 'string') {
        const contextObjectKey = '_objectKey' in clientUploadContext ? clientUploadContext._objectKey : undefined;
        const containedPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildUploadStoragePathData"])({
            collectionPrefix,
            docPrefix: clientUploadContext.prefix,
            filename,
            useCompositePrefixes
        }).sanitizedDocPrefix;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildPrefixWithObjectKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPrefixWithObjectKey"])({
            objectKey: contextObjectKey,
            prefix: containedPrefix
        });
    }
    // Reads without a query prefix or read-access constraints skip the endpoint's document lookup.
    const imageSizes = collection?.upload?.imageSizes || [];
    const filenameClause = {
        or: [
            {
                filename: {
                    equals: filename
                }
            },
            ...imageSizes.map((imageSize)=>({
                    [`sizes.${imageSize.name}.filename`]: {
                        equals: filename
                    }
                }))
        ]
    };
    // Only filter by prefix when the collection persists a `prefix` field (querying a missing field throws).
    const hasPrefixField = collection.fields?.some((field)=>'name' in field && field.name === 'prefix');
    const where = typeof prefixQueryParam === 'string' && hasPrefixField ? {
        and: [
            filenameClause,
            {
                prefix: {
                    equals: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$sanitizePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizePrefix"])(prefixQueryParam)
                }
            }
        ]
    } : filenameClause;
    const files = await req.payload.find({
        collection: collection.slug,
        depth: 0,
        draft: true,
        limit: 1,
        overrideAccess: false,
        pagination: false,
        req,
        select: {
            _objectKey: true,
            prefix: true
        },
        where
    });
    const found = files?.docs?.[0];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildPrefixWithObjectKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPrefixWithObjectKey"])({
        objectKey: found?._objectKey,
        prefix: found?.prefix
    });
}
async function getStorageFilePath(args) {
    const docPrefix = await getFilePrefix(args);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildStoragePathData"])({
        collectionPrefix: args.collectionPrefix,
        docPrefix,
        filename: args.filename,
        useCompositePrefixes: args.useCompositePrefixes
    }).storageFilePath;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/getIncomingFiles.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIncomingFiles",
    ()=>getIncomingFiles
]);
function getIncomingFiles({ data, req }) {
    // Fall back to context if req.file was cleared
    const ctx = req.context?._payloadCloudStorage;
    const file = req.file ?? ctx?.file;
    const payloadUploadSizes = req.payloadUploadSizes ?? ctx?.uploadSizes;
    let files = [];
    if (file && data.filename && data.mimeType) {
        const mainFile = {
            buffer: file.data,
            clientUploadContext: file.clientUploadContext,
            filename: data.filename,
            filesize: file.size,
            mimeType: data.mimeType,
            tempFilePath: file.tempFilePath
        };
        files = [
            mainFile
        ];
        if (data?.sizes) {
            Object.entries(data.sizes).forEach(([key, resizedFileData])=>{
                if (payloadUploadSizes?.[key] && resizedFileData.mimeType) {
                    files = files.concat([
                        {
                            buffer: payloadUploadSizes[key],
                            filename: `${resizedFileData.filename}`,
                            filesize: payloadUploadSizes[key].length,
                            mimeType: resizedFileData.mimeType
                        }
                    ]);
                }
            });
        }
    }
    return files;
}
}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/initClientUploads.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initClientUploads",
    ()=>initClientUploads
]);
const initClientUploads = ({ clientHandler, collections, config, enabled, extraClientHandlerProps, serverHandler, serverHandlerPath })=>{
    if (enabled) {
        if (!config.endpoints) {
            config.endpoints = [];
        }
        /**
     * Tracks how many times the same handler was already applied.
     * This allows to apply the same plugin multiple times, for example
     * to use different buckets for different collections.
     */ let handlerCount = 0;
        for (const endpoint of config.endpoints){
            // We want to match on 'path', 'path-1', 'path-2', etc.
            if (endpoint.path?.startsWith(serverHandlerPath)) {
                handlerCount++;
            }
        }
        if (handlerCount) {
            serverHandlerPath = `${serverHandlerPath}-${handlerCount}`;
        }
        config.endpoints.push({
            handler: serverHandler,
            method: 'post',
            path: serverHandlerPath
        });
    }
    if (!config.admin) {
        config.admin = {};
    }
    if (!config.admin.dependencies) {
        config.admin.dependencies = {};
    }
    // Ensure client handler is always part of the import map, to avoid
    // import map discrepancies between dev and prod
    config.admin.dependencies[clientHandler] = {
        type: 'function',
        path: clientHandler
    };
    if (!enabled) {
        return;
    }
    if (!config.admin.components) {
        config.admin.components = {};
    }
    if (!config.admin.components.providers) {
        config.admin.components.providers = [];
    }
    for(const collectionSlug in collections){
        const collection = collections[collectionSlug];
        let collectionPrefix;
        if (collection && typeof collection === 'object' && 'prefix' in collection && typeof collection.prefix === 'string') {
            collectionPrefix = collection.prefix;
        }
        config.admin.components.providers.push({
            clientProps: {
                collectionSlug,
                enabled,
                extra: extraClientHandlerProps ? extraClientHandlerProps(collection) : undefined,
                prefix: collectionPrefix,
                serverHandlerPath
            },
            path: clientHandler
        });
    }
};
}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/resolveSignedURLKey.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "resolveSignedURLKey",
    ()=>resolveSignedURLKey
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/internal [external] (payload/internal, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/buildStoragePathData.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function resolveSignedURLKey({ collectionPrefix = '', collectionSlug, docPrefix, filename, req, useCompositePrefixes = false }) {
    // Sanitize with the same helper generateFileData uses for the DB filename so the storage key
    // and doc.filename stay in sync (#16694).
    const sanitizedFilename = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["getSafeFileName"])({
        collectionSlug,
        desiredFilename: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["getSanitizedUploadFilename"])(filename),
        req
    });
    const rawBaseDocPrefix = useCompositePrefixes ? docPrefix : docPrefix || collectionPrefix;
    const { sanitizedDocPrefix } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildUploadPrefix"])({
        collectionPrefix,
        docPrefix: rawBaseDocPrefix,
        useCompositePrefixes
    });
    const _objectKey = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
    // Persisted in `_objectKey`, keeping `prefix` semantic.
    const keyedDocPrefix = sanitizedDocPrefix ? `${sanitizedDocPrefix}/${_objectKey}` : _objectKey;
    const { storageFilePath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildUploadStoragePathData"])({
        collectionPrefix,
        docPrefix: keyedDocPrefix,
        filename: sanitizedFilename,
        useCompositePrefixes
    });
    const context = {
        _objectKey,
        prefix: sanitizedDocPrefix
    };
    const clientUploadContext = {
        ...context,
        signedReceipt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["createClientUploadReceipt"])({
            collectionSlug,
            context,
            filename: sanitizedFilename,
            req
        })
    };
    return {
        _objectKey,
        clientUploadContext,
        fileKey: storageFilePath,
        sanitizedDocPrefix,
        sanitizedFilename,
        storageFilePath
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/sanitizePrefix.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Normalizes a storage prefix for use in object keys and URLs.
 *
 * Decodes URI components once (so query-style `%2F` becomes `/`), rejects
 * values that still contain percent-encodings after decoding (e.g. `%252f`),
 * then removes control characters, normalizes slashes, drops `.` / `..` segments,
 * and strips leading slashes.
 */ __turbopack_context__.s([
    "sanitizePrefix",
    ()=>sanitizePrefix
]);
function sanitizePrefix(prefix) {
    let decodedPrefix;
    try {
        decodedPrefix = decodeURIComponent(prefix);
    } catch  {
        return '';
    }
    // Reject multi-encoded values (e.g. `%252f`) by allowing only a single decode pass.
    if (/%[0-9a-f]{2}/i.test(decodedPrefix)) {
        return '';
    }
    return decodedPrefix // eslint-disable-next-line no-control-regex
    .replace(/[\x00-\x1f\x80-\x9f]/g, '').replace(/\\/g, '/').split('/').filter((segment)=>segment && segment !== '..' && segment !== '.').join('/').replace(/^\/+/, '');
}
}),
"[project]/node_modules/@payloadcms/storage-s3/dist/adapter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "createS3Adapter",
    ()=>createS3Adapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$deleteFile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/storage-s3/dist/deleteFile.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$generateURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/storage-s3/dist/generateURL.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$getFile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/storage-s3/dist/getFile.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$uploadFile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/storage-s3/dist/uploadFile.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$generateURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$getFile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$generateURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$getFile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function createS3Adapter({ acl, bucket, clientUploads, config, getStorageClient, signedDownloads, useCompositePrefixes = false }) {
    return ({ collection, prefix = '' })=>({
            name: 's3',
            clientUploads,
            requiresClientUploadReceipt: true,
            generateURL: ({ filename, prefix: urlPrefix = '' })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$generateURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateURL"])({
                    bucket,
                    collectionPrefix: prefix,
                    endpoint: config.endpoint,
                    filename,
                    prefix: urlPrefix,
                    useCompositePrefixes
                }),
            handleDelete: ({ storageFilePath })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$deleteFile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteFile"])({
                    bucket,
                    client: getStorageClient(),
                    storageFilePath
                }),
            handleUpload: async ({ data, file, storageFilePath })=>{
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$uploadFile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadFile"])({
                    acl,
                    bucket,
                    buffer: file.buffer,
                    client: getStorageClient(),
                    mimeType: file.mimeType,
                    storageFilePath,
                    tempFilePath: file.tempFilePath
                });
                return data;
            },
            staticHandler: (req, { doc, headers, params: { clientUploadContext, filename } })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$getFile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFile"])({
                    bucket,
                    client: getStorageClient(),
                    clientUploadContext,
                    collection,
                    collectionPrefix: prefix,
                    doc,
                    filename,
                    incomingHeaders: headers,
                    req,
                    signedDownloads,
                    useCompositePrefixes
                })
        });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/storage-s3/dist/deleteFile.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteFile",
    ()=>deleteFile
]);
async function deleteFile({ bucket, client, storageFilePath }) {
    await client.deleteObject({
        Bucket: bucket,
        Key: storageFilePath
    });
}
}),
"[project]/node_modules/@payloadcms/storage-s3/dist/generateSignedURL.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "getGenerateSignedURLHandler",
    ()=>getGenerateSignedURLHandler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__ = __turbopack_context__.i("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs, [project]/node_modules/@aws-sdk/client-s3)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/s3-request-presigner/dist-es/getSignedUrl.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$resolveSignedURLKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/resolveSignedURLKey.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/internal [external] (payload/internal, esm_import, [project]/node_modules/payload)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$resolveSignedURLKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$resolveSignedURLKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const bytesToMB = (bytes)=>{
    return bytes / 1024 / 1024;
};
const defaultAccess = ({ req })=>!!req.user;
const getGenerateSignedURLHandler = ({ access = defaultAccess, acl, bucket, collections, getStorageClient, useCompositePrefixes = false })=>{
    return async (req)=>{
        if (!req.json) {
            throw new __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["APIError"]('Content-Type expected to be application/json', 400);
        }
        let filesizeLimit = req.payload.config.upload.limits?.fileSize;
        if (filesizeLimit === Infinity) {
            filesizeLimit = undefined;
        }
        const { collectionSlug, docPrefix, filename, filesize, mimeType } = await req.json();
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["assertClientUploadAccess"])({
            collectionSlug,
            req
        });
        const collectionS3Config = collections[collectionSlug];
        if (!collectionS3Config) {
            throw new __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["APIError"](`Collection ${collectionSlug} was not found in S3 options`);
        }
        const collectionPrefix = typeof collectionS3Config === 'object' && collectionS3Config.prefix || '';
        if (!await access({
            collectionSlug,
            req
        })) {
            throw new __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["Forbidden"]();
        }
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["assertClientUploadAllowed"])({
            collection: req.payload.collections[collectionSlug]?.config,
            filename,
            mimeType
        });
        const { clientUploadContext, fileKey, sanitizedDocPrefix, sanitizedFilename } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$resolveSignedURLKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveSignedURLKey"])({
            collectionPrefix,
            collectionSlug,
            docPrefix,
            filename,
            req,
            useCompositePrefixes
        });
        const signableHeaders = new Set();
        if (typeof mimeType === 'string' && mimeType) {
            signableHeaders.add('content-type');
        }
        if (filesizeLimit) {
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["assertClientUploadFileSize"])(filesize);
            if (filesize > filesizeLimit) {
                throw new __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["APIError"](`Exceeded file size limit. Limit: ${bytesToMB(filesizeLimit).toFixed(2)}MB, got: ${bytesToMB(filesize).toFixed(2)}MB`, 400);
            }
            // Still force S3 to validate
            signableHeaders.add('content-length');
        }
        const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSignedUrl"])(getStorageClient(), new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["PutObjectCommand"]({
            ACL: acl,
            Bucket: bucket,
            ContentLength: filesizeLimit ? Math.min(filesize, filesizeLimit) : undefined,
            ContentType: mimeType,
            IfNoneMatch: '*',
            Key: fileKey
        }), {
            expiresIn: 600,
            signableHeaders
        });
        return Response.json({
            clientUploadContext,
            docPrefix: sanitizedDocPrefix,
            filename: sanitizedFilename,
            headers: {
                'Content-Length': String(filesize),
                'Content-Type': mimeType,
                'If-None-Match': '*'
            },
            url
        });
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/storage-s3/dist/generateURL.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "generateURL",
    ()=>generateURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/buildStoragePathData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function generateURL({ bucket, collectionPrefix = '', endpoint, filename, prefix, useCompositePrefixes = false }) {
    const { storageFilePath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$buildStoragePathData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildStoragePathData"])({
        collectionPrefix,
        docPrefix: prefix,
        filename,
        useCompositePrefixes
    });
    const dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].posix.dirname(storageFilePath);
    const encodedFilename = encodeURIComponent(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].posix.basename(storageFilePath));
    const fileKey = dir === '.' ? encodedFilename : __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].posix.join(dir, encodedFilename);
    const stringifiedEndpoint = typeof endpoint === 'string' ? endpoint : endpoint?.toString();
    return `${stringifiedEndpoint}/${bucket}/${fileKey}`;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/storage-s3/dist/getFile.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "getFile",
    ()=>getFile
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__ = __turbopack_context__.i("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs, [project]/node_modules/@aws-sdk/client-s3)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/s3-request-presigner/dist-es/getSignedUrl.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$getFilePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/getFilePrefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/internal [external] (payload/internal, esm_import, [project]/node_modules/payload)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$getFilePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$getFilePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const isNodeReadableStream = (body)=>{
    return typeof body === 'object' && body !== null && 'pipe' in body && typeof body.pipe === 'function' && 'destroy' in body && typeof body.destroy === 'function';
};
const abortRequestAndDestroyStream = ({ abortController, object })=>{
    try {
        abortController.abort();
    } catch  {
    /* noop */ }
    if (object?.Body && isNodeReadableStream(object.Body)) {
        object.Body.destroy();
    }
};
async function getFile({ bucket, client, clientUploadContext, collection, collectionPrefix = '', doc, filename, incomingHeaders, req, signedDownloads, useCompositePrefixes = false }) {
    let object = undefined;
    let streamed = false;
    const abortController = new AbortController();
    if (req.signal) {
        req.signal.addEventListener('abort', ()=>{
            abortRequestAndDestroyStream({
                abortController,
                object
            });
        });
    }
    try {
        const filePath = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$getFilePrefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStorageFilePath"])({
            clientUploadContext,
            collection,
            collectionPrefix,
            doc,
            filename,
            req,
            useCompositePrefixes
        });
        if (signedDownloads && !clientUploadContext) {
            let useSignedURL = true;
            if (typeof signedDownloads === 'object' && typeof signedDownloads.shouldUseSignedURL === 'function') {
                useSignedURL = await signedDownloads.shouldUseSignedURL({
                    collection,
                    filename,
                    req
                });
            }
            if (useSignedURL) {
                const command = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["GetObjectCommand"]({
                    Bucket: bucket,
                    Key: filePath
                });
                const signedUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSignedUrl"])(client, command, typeof signedDownloads === 'object' ? signedDownloads : {
                    expiresIn: 7200
                });
                return Response.redirect(signedUrl, 302);
            }
        }
        // Get file size first for range validation and to set Content-Length header before streaming
        const headObject = await client.headObject({
            Bucket: bucket,
            Key: filePath
        });
        const fileSize = headObject.ContentLength;
        if (!fileSize) {
            return new Response('Internal Server Error', {
                status: 500
            });
        }
        // Handle range request
        const rangeHeader = req.headers.get('range');
        const rangeResult = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["getRangeRequestInfo"])({
            fileSize,
            rangeHeader
        });
        if (rangeResult.type === 'invalid') {
            return new Response(null, {
                headers: new Headers(rangeResult.headers),
                status: rangeResult.status
            });
        }
        const rangeForS3 = rangeResult.type === 'partial' ? `bytes=${rangeResult.rangeStart}-${rangeResult.rangeEnd}` : undefined;
        let headers = new Headers(incomingHeaders);
        // Add range-related headers from the result
        for (const [headerKey, value] of Object.entries(rangeResult.headers)){
            headers.append(headerKey, value);
        }
        headers.append('Content-Type', String(headObject.ContentType));
        if (headObject.ETag) {
            headers.append('ETag', headObject.ETag);
        }
        // Add Content-Security-Policy header for XML-family files
        if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["isXmlMimeType"])(headObject.ContentType)) {
            headers.append('Content-Security-Policy', __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$internal__$5b$external$5d$__$28$payload$2f$internal$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["UPLOAD_CONTENT_SECURITY_POLICY"]);
        }
        const etagFromHeaders = req.headers.get('etag') || req.headers.get('if-none-match');
        const objectEtag = headObject.ETag;
        if (collection.upload && typeof collection.upload === 'object' && typeof collection.upload.modifyResponseHeaders === 'function') {
            headers = collection.upload.modifyResponseHeaders({
                headers
            }) || headers;
        }
        if (etagFromHeaders && etagFromHeaders === objectEtag) {
            return new Response(null, {
                headers,
                status: 304
            });
        }
        object = await client.getObject({
            Bucket: bucket,
            Key: filePath,
            Range: rangeForS3
        }, {
            abortSignal: abortController.signal
        });
        if (!object.Body) {
            return new Response(null, {
                status: 404,
                statusText: 'Not Found'
            });
        }
        if (!isNodeReadableStream(object.Body)) {
            req.payload.logger.error({
                key: filePath,
                msg: 'S3 object body is not a readable stream'
            });
            return new Response('Internal Server Error', {
                status: 500
            });
        }
        const stream = object.Body;
        stream.on('error', (err)=>{
            req.payload.logger.error({
                err,
                key: filePath,
                msg: 'Error while streaming S3 object (aborting)'
            });
            abortRequestAndDestroyStream({
                abortController,
                object
            });
        });
        streamed = true;
        return new Response(stream, {
            headers,
            status: rangeResult.status
        });
    } catch (err) {
        if (err && typeof err === 'object' && ('name' in err && (err.name === 'NoSuchKey' || err.name === 'NotFound') || 'httpStatusCode' in err && err.httpStatusCode === 404)) {
            return new Response(null, {
                status: 404,
                statusText: 'Not Found'
            });
        }
        req.payload.logger.error(err);
        return new Response('Internal Server Error', {
            status: 500
        });
    } finally{
        if (!streamed) {
            abortRequestAndDestroyStream({
                abortController,
                object
            });
        }
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/storage-s3/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "s3Storage",
    ()=>s3Storage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__ = __turbopack_context__.i("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs, [project]/node_modules/@aws-sdk/client-s3)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$plugin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/plugin.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$initClientUploads$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/plugin-cloud-storage/dist/utilities/initClientUploads.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/storage-s3/dist/adapter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$generateSignedURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/storage-s3/dist/generateSignedURL.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$plugin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$generateSignedURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$plugin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$generateSignedURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const s3Clients = new Map();
const defaultRequestHandlerOpts = {
    httpAgent: {
        keepAlive: true,
        maxSockets: 100
    },
    httpsAgent: {
        keepAlive: true,
        maxSockets: 100
    }
};
const s3Storage = (s3StorageOptions)=>(incomingConfig)=>{
        const cacheKey = s3StorageOptions.clientCacheKey || `s3:${s3StorageOptions.bucket}`;
        const getStorageClient = ()=>{
            if (s3Clients.has(cacheKey)) {
                return s3Clients.get(cacheKey);
            }
            s3Clients.set(cacheKey, new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["S3"]({
                requestHandler: defaultRequestHandlerOpts,
                ...s3StorageOptions.config ?? {}
            }));
            return s3Clients.get(cacheKey);
        };
        const isPluginDisabled = s3StorageOptions.enabled === false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$utilities$2f$initClientUploads$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initClientUploads"])({
            clientHandler: '@payloadcms/storage-s3/client#S3ClientUploadHandler',
            collections: s3StorageOptions.collections,
            config: incomingConfig,
            enabled: !isPluginDisabled && Boolean(s3StorageOptions.clientUploads),
            serverHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$generateSignedURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGenerateSignedURLHandler"])({
                access: typeof s3StorageOptions.clientUploads === 'object' ? s3StorageOptions.clientUploads.access : undefined,
                acl: s3StorageOptions.acl,
                bucket: s3StorageOptions.bucket,
                collections: s3StorageOptions.collections,
                getStorageClient,
                useCompositePrefixes: s3StorageOptions.useCompositePrefixes
            }),
            serverHandlerPath: '/storage-s3-generate-signed-url'
        });
        if (isPluginDisabled) {
            // If alwaysInsertFields is true, still call cloudStoragePlugin to insert fields
            if (s3StorageOptions.alwaysInsertFields) {
                // Build collections with adapter: null since plugin is disabled
                const collectionsWithoutAdapter = Object.entries(s3StorageOptions.collections).reduce((acc, [slug, collOptions])=>({
                        ...acc,
                        [slug]: {
                            ...collOptions === true ? {} : collOptions,
                            adapter: null
                        }
                    }), {});
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$plugin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloudStoragePlugin"])({
                    alwaysInsertFields: true,
                    collections: collectionsWithoutAdapter,
                    enabled: false,
                    useCompositePrefixes: s3StorageOptions.useCompositePrefixes
                })(incomingConfig);
            }
            return incomingConfig;
        }
        // Determine signedDownloads for this collection
        const resolveSignedDownloads = (slug)=>{
            const collectionStorageConfig = s3StorageOptions.collections[slug];
            let signedDownloads = typeof collectionStorageConfig === 'object' ? collectionStorageConfig.signedDownloads ?? false : null;
            if (signedDownloads === null) {
                signedDownloads = s3StorageOptions.signedDownloads ?? false;
            }
            return signedDownloads;
        };
        // Add adapter to each collection option object
        const collectionsWithAdapter = Object.entries(s3StorageOptions.collections).reduce((acc, [slug, collOptions])=>({
                ...acc,
                [slug]: {
                    ...collOptions === true ? {} : collOptions,
                    adapter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$storage$2d$s3$2f$dist$2f$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createS3Adapter"])({
                        acl: s3StorageOptions.acl,
                        bucket: s3StorageOptions.bucket,
                        clientUploads: s3StorageOptions.clientUploads,
                        config: s3StorageOptions.config,
                        getStorageClient,
                        signedDownloads: resolveSignedDownloads(slug),
                        useCompositePrefixes: s3StorageOptions.useCompositePrefixes
                    })
                }
            }), {});
        // Set disableLocalStorage: true for collections specified in the plugin options
        const config = {
            ...incomingConfig,
            collections: (incomingConfig.collections || []).map((collection)=>{
                if (!collectionsWithAdapter[collection.slug]) {
                    return collection;
                }
                return {
                    ...collection,
                    upload: {
                        ...typeof collection.upload === 'object' ? collection.upload : {},
                        disableLocalStorage: true
                    }
                };
            })
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$plugin$2d$cloud$2d$storage$2f$dist$2f$plugin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloudStoragePlugin"])({
            alwaysInsertFields: s3StorageOptions.alwaysInsertFields,
            collections: collectionsWithAdapter,
            useCompositePrefixes: s3StorageOptions.useCompositePrefixes
        })(config);
    };
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/storage-s3/dist/uploadFile.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uploadFile",
    ()=>uploadFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/lib-storage/dist-es/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$Upload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/lib-storage/dist-es/Upload.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
;
;
const multipartThreshold = 1024 * 1024 * 50 // 50MB
;
async function uploadFile({ acl, bucket, buffer, client, mimeType, storageFilePath, tempFilePath }) {
    const fileBufferOrStream = tempFilePath ? __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].createReadStream(tempFilePath) : buffer;
    if (buffer.length > 0 && buffer.length < multipartThreshold) {
        await client.putObject({
            ACL: acl,
            Body: fileBufferOrStream,
            Bucket: bucket,
            ContentType: mimeType,
            Key: storageFilePath
        });
        return;
    }
    const parallelUploadS3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$lib$2d$storage$2f$dist$2d$es$2f$Upload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Upload"]({
        client,
        params: {
            ACL: acl,
            Body: fileBufferOrStream,
            Bucket: bucket,
            ContentType: mimeType,
            Key: storageFilePath
        },
        partSize: multipartThreshold,
        queueSize: 4
    });
    await parallelUploadS3.done();
}
}),
"[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/addFieldStatePromise.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "addFieldStatePromise",
    ()=>addFieldStatePromise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bson-objectid/objectid.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$resolveFilterOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/ui/dist/utilities/resolveFilterOptions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$isRowCollapsed$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/isRowCollapsed.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/iterateFields.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const ObjectId = 'default' in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].default : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const addFieldStatePromise = async (args)=>{
    const { id, addErrorPathToParent: addErrorPathToParentArg, anyParentLocalized = false, blockData, clientFieldSchemaMap, collectionSlug, data, field, fieldSchemaMap, filter, forceFullValue = false, fullData, includeSchema = false, indexPath, mockRSCs, omitParents = false, operation, parentPath, parentPermissions, parentSchemaPath, passesCondition, path, preferences, previousFormState, readOnly, renderAllFields, renderFieldFn, req, schemaPath, select, selectMode, skipConditionChecks = false, skipValidation = false, state } = args;
    if (!args.clientFieldSchemaMap && args.renderFieldFn) {
        // eslint-disable-next-line no-console
        console.warn('clientFieldSchemaMap is not passed to addFieldStatePromise - this will reduce performance');
    }
    let fieldPermissions = true;
    const fieldState = {};
    const lastRenderedPath = previousFormState?.[path]?.lastRenderedPath;
    // Append only if true to avoid sending '$undefined' through the network
    if (lastRenderedPath) {
        fieldState.lastRenderedPath = lastRenderedPath;
    }
    // If we're rendering all fields, no need to flag this as added by server
    const addedByServer = !renderAllFields && !previousFormState?.[path];
    // Append only if true to avoid sending '$undefined' through the network
    if (addedByServer) {
        fieldState.addedByServer = true;
    }
    // Append only if true to avoid sending '$undefined' through the network
    if (passesCondition === false) {
        fieldState.passesCondition = false;
    }
    // Append only if true to avoid sending '$undefined' through the network
    if (includeSchema) {
        fieldState.fieldSchema = field;
    }
    // Short-circuit hidden fields to prevent recursing and rendering. Two exclusions:
    // - `tab`: visibility is keyed by `field.id` (not `path`); the tab branch owns that write.
    // - presentational containers (row, collapsible, unnamed group): they hold no value, so
    //   returning here drops their nested fields' values. They fall through to the
    //   `fieldHasSubFields` branch, which recurses to preserve child values without rendering.
    const isPresentationalWithSubFields = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldHasSubFields"])(field) && !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldAffectsData"])(field);
    if (passesCondition === false && field.type !== 'tab' && !isPresentationalWithSubFields) {
        if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldAffectsData"])(field) && data?.[field.name] !== undefined) {
            fieldState.value = data[field.name];
            fieldState.initialValue = data[field.name];
        }
        if (!filter || filter(args)) {
            state[path] = fieldState;
        }
        return;
    }
    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldAffectsData"])(field) && !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldIsHiddenOrDisabled"])(field) && field.type !== 'tab') {
        fieldPermissions = parentPermissions === true ? parentPermissions : (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["deepCopyObjectSimple"])(parentPermissions?.[field.name]);
        let hasPermission = fieldPermissions === true || (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["deepCopyObjectSimple"])(fieldPermissions?.read);
        if (typeof field?.access?.read === 'function') {
            hasPermission = await field.access.read({
                id,
                blockData,
                data: fullData,
                req,
                siblingData: data
            });
        } else {
            hasPermission = true;
        }
        if (!hasPermission) {
            return;
        }
        const validate = 'validate' in field ? field.validate : undefined;
        let validationResult = true;
        if (typeof validate === 'function' && !skipValidation && passesCondition) {
            let jsonError;
            if (field.type === 'json' && typeof data[field.name] === 'string') {
                try {
                    JSON.parse(data[field.name]);
                } catch (e) {
                    jsonError = e;
                }
            }
            try {
                validationResult = await validate(data?.[field.name], {
                    ...field,
                    id,
                    blockData,
                    collectionSlug,
                    data: fullData,
                    event: 'onChange',
                    // @AlessioGr added `jsonError` in https://github.com/payloadcms/payload/commit/c7ea62a39473408c3ea912c4fbf73e11be4b538d
                    // @ts-expect-error-next-line
                    jsonError,
                    operation,
                    preferences,
                    previousValue: previousFormState?.[path]?.initialValue,
                    req,
                    siblingData: data
                });
            } catch (err) {
                validationResult = `Error validating field at path: ${path}`;
                req.payload.logger.error({
                    err,
                    msg: validationResult
                });
            }
        }
        /**
    * This function adds the error **path** to the current field and all its parents. If a field is invalid, all its parents are also invalid.
    * It does not add the error **message** to the current field, as that shouldn't apply to all parents.
    * This is done separately below.
    */ const addErrorPathToParent = (errorPath)=>{
            if (typeof addErrorPathToParentArg === 'function') {
                addErrorPathToParentArg(errorPath);
            }
            if (!fieldState.errorPaths) {
                fieldState.errorPaths = [];
            }
            if (!fieldState.errorPaths.includes(errorPath)) {
                fieldState.errorPaths.push(errorPath);
                fieldState.valid = false;
            }
        };
        if (typeof validationResult === 'string') {
            fieldState.errorMessage = validationResult;
            fieldState.valid = false;
            addErrorPathToParent(path);
        }
        switch(field.type){
            case 'array':
                {
                    const arrayValue = Array.isArray(data[field.name]) ? data[field.name] : [];
                    const arraySelect = select?.[field.name];
                    const { promises, rows } = arrayValue.reduce((acc, row, rowIndex)=>{
                        const rowPath = path + '.' + rowIndex;
                        row.id = row?.id || new ObjectId().toHexString();
                        if (!omitParents && (!filter || filter(args))) {
                            const idKey = rowPath + '.id';
                            state[idKey] = {
                                initialValue: row.id,
                                value: row.id
                            };
                            if (includeSchema) {
                                state[idKey].fieldSchema = field.fields.find((field)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldIsID"])(field));
                            }
                        }
                        acc.promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                            id,
                            addErrorPathToParent,
                            anyParentLocalized: field.localized || anyParentLocalized,
                            blockData,
                            clientFieldSchemaMap,
                            collectionSlug,
                            data: row,
                            fields: field.fields,
                            fieldSchemaMap,
                            filter,
                            forceFullValue,
                            fullData,
                            includeSchema,
                            mockRSCs,
                            omitParents,
                            operation,
                            parentIndexPath: '',
                            parentPassesCondition: passesCondition,
                            parentPath: rowPath,
                            parentSchemaPath: schemaPath,
                            permissions: fieldPermissions === true ? fieldPermissions : fieldPermissions?.fields || {},
                            preferences,
                            previousFormState,
                            readOnly,
                            renderAllFields,
                            renderFieldFn,
                            req,
                            select: typeof arraySelect === 'object' ? arraySelect : undefined,
                            selectMode,
                            skipConditionChecks,
                            skipValidation,
                            state
                        }));
                        if (!acc.rows) {
                            acc.rows = [];
                        }
                        // First, check if `previousFormState` has a matching row
                        const previousRow = (previousFormState?.[path]?.rows || []).find((prevRow)=>prevRow.id === row.id);
                        const newRow = {
                            id: row.id,
                            isLoading: false
                        };
                        if (previousRow?.lastRenderedPath) {
                            newRow.lastRenderedPath = previousRow.lastRenderedPath;
                        }
                        // add addedByServer flag
                        if (!previousRow) {
                            newRow.addedByServer = true;
                        }
                        const isCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$isRowCollapsed$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isRowCollapsed"])({
                            collapsedPrefs: preferences?.fields?.[path]?.collapsed,
                            field,
                            previousRow,
                            row
                        });
                        if (isCollapsed) {
                            newRow.collapsed = true;
                        }
                        acc.rows.push(newRow);
                        return acc;
                    }, {
                        promises: [],
                        rows: []
                    });
                    // Wait for all promises and update fields with the results
                    await Promise.all(promises);
                    if (rows) {
                        fieldState.rows = rows;
                    }
                    // Add values to field state
                    if (data[field.name] !== null) {
                        fieldState.value = forceFullValue ? arrayValue : arrayValue.length;
                        fieldState.initialValue = forceFullValue ? arrayValue : arrayValue.length;
                        if (arrayValue.length > 0) {
                            fieldState.disableFormData = true;
                        }
                    }
                    // Add field to state
                    if (!omitParents && (!filter || filter(args))) {
                        state[path] = fieldState;
                    }
                    break;
                }
            case 'blocks':
                {
                    const blocksValue = Array.isArray(data[field.name]) ? data[field.name] : [];
                    // Handle blocks filterOptions
                    let filterOptionsValidationResult = null;
                    if (field.filterOptions) {
                        filterOptionsValidationResult = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["validateBlocksFilterOptions"])({
                            id,
                            data: fullData,
                            filterOptions: field.filterOptions,
                            req,
                            siblingData: data,
                            value: data[field.name]
                        });
                        fieldState.blocksFilterOptions = filterOptionsValidationResult.allowedBlockSlugs;
                    }
                    const { promises, rowMetadata } = blocksValue.reduce((acc, row, i)=>{
                        const blockTypeToMatch = row.blockType;
                        const block = req.payload.blocks[blockTypeToMatch] ?? (field.blockReferences ?? field.blocks).find((blockType)=>typeof blockType !== 'string' && blockType.slug === blockTypeToMatch);
                        if (!block) {
                            throw new Error(`Block with type "${row.blockType}" was found in block data, but no block with that type is defined in the config for field with schema path ${schemaPath}.`);
                        }
                        const { blockSelect, blockSelectMode } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["getBlockSelect"])({
                            block,
                            select: select?.[field.name],
                            selectMode
                        });
                        const rowPath = path + '.' + i;
                        if (block) {
                            row.id = row?.id || new ObjectId().toHexString();
                            if (!omitParents && (!filter || filter(args))) {
                                // Handle block `id` field
                                const idKey = rowPath + '.id';
                                state[idKey] = {
                                    initialValue: row.id,
                                    value: row.id
                                };
                                // If the blocks field fails filterOptions validation, add error paths to the individual blocks that are no longer allowed
                                if (filterOptionsValidationResult?.invalidBlockSlugs?.length && filterOptionsValidationResult.invalidBlockSlugs.includes(row.blockType)) {
                                    state[idKey].errorMessage = req.t('validation:invalidBlock', {
                                        block: row.blockType
                                    });
                                    state[idKey].valid = false;
                                    addErrorPathToParent(idKey);
                                    // If the error is due to block filterOptions, we want the blocks field (fieldState) to include all the filterOptions-related
                                    // error paths for each sub-block, not for the validation result of the block itself. Otherwise, say there are 2 invalid blocks,
                                    // the blocks field will have 3 instead of 2 error paths - one for itself, and one for each invalid block.
                                    // Instead, we want only the 2 error paths for the individual, invalid blocks.
                                    fieldState.errorPaths = fieldState.errorPaths.filter((errorPath)=>errorPath !== path);
                                }
                                if (includeSchema) {
                                    state[idKey].fieldSchema = includeSchema ? block.fields.find((blockField)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldIsID"])(blockField)) : undefined;
                                }
                                // Handle `blockType` field
                                const fieldKey = rowPath + '.blockType';
                                state[fieldKey] = {
                                    initialValue: row.blockType,
                                    value: row.blockType
                                };
                                if (addedByServer) {
                                    state[fieldKey].addedByServer = addedByServer;
                                }
                                if (includeSchema) {
                                    state[fieldKey].fieldSchema = block.fields.find((blockField)=>'name' in blockField && blockField.name === 'blockType');
                                }
                                // Handle `blockName` field
                                const blockNameKey = rowPath + '.blockName';
                                state[blockNameKey] = {};
                                if (row.blockName) {
                                    state[blockNameKey].initialValue = row.blockName;
                                    state[blockNameKey].value = row.blockName;
                                }
                                if (includeSchema) {
                                    state[blockNameKey].fieldSchema = block.fields.find((blockField)=>'name' in blockField && blockField.name === 'blockName');
                                }
                            }
                            acc.promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                                id,
                                addErrorPathToParent,
                                anyParentLocalized: field.localized || anyParentLocalized,
                                blockData: row,
                                clientFieldSchemaMap,
                                collectionSlug,
                                data: row,
                                fields: block.fields,
                                fieldSchemaMap,
                                filter,
                                forceFullValue,
                                fullData,
                                includeSchema,
                                mockRSCs,
                                omitParents,
                                operation,
                                parentIndexPath: '',
                                parentPassesCondition: passesCondition,
                                parentPath: rowPath,
                                parentSchemaPath: schemaPath + '.' + block.slug,
                                permissions: fieldPermissions === true ? fieldPermissions : parentPermissions?.[field.name]?.blocks?.[block.slug] === true ? true : parentPermissions?.[field.name]?.blocks?.[block.slug]?.fields || {},
                                preferences,
                                previousFormState,
                                readOnly,
                                renderAllFields,
                                renderFieldFn,
                                req,
                                select: typeof blockSelect === 'object' ? blockSelect : undefined,
                                selectMode: blockSelectMode,
                                skipConditionChecks,
                                skipValidation,
                                state
                            }));
                            // First, check if `previousFormState` has a matching row
                            const previousRow = (previousFormState?.[path]?.rows || []).find((prevRow)=>prevRow.id === row.id);
                            const newRow = {
                                id: row.id,
                                blockType: row.blockType,
                                isLoading: false
                            };
                            if (previousRow?.lastRenderedPath) {
                                newRow.lastRenderedPath = previousRow.lastRenderedPath;
                            }
                            acc.rowMetadata.push(newRow);
                            const isCollapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$isRowCollapsed$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isRowCollapsed"])({
                                collapsedPrefs: preferences?.fields?.[path]?.collapsed,
                                field,
                                previousRow,
                                row
                            });
                            if (isCollapsed) {
                                acc.rowMetadata[acc.rowMetadata.length - 1].collapsed = true;
                            }
                        }
                        return acc;
                    }, {
                        promises: [],
                        rowMetadata: []
                    });
                    await Promise.all(promises);
                    // Add values to field state
                    if (data[field.name] === null) {
                        fieldState.value = null;
                        fieldState.initialValue = null;
                    } else {
                        fieldState.value = forceFullValue ? blocksValue : blocksValue.length;
                        fieldState.initialValue = forceFullValue ? blocksValue : blocksValue.length;
                        if (blocksValue.length > 0) {
                            fieldState.disableFormData = true;
                        }
                    }
                    fieldState.rows = rowMetadata;
                    // Add field to state
                    if (!omitParents && (!filter || filter(args))) {
                        state[path] = fieldState;
                    }
                    break;
                }
            case 'group':
                {
                    if (!filter || filter(args)) {
                        fieldState.disableFormData = true;
                        state[path] = fieldState;
                    }
                    const groupSelect = select?.[field.name];
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                        id,
                        addErrorPathToParent,
                        anyParentLocalized: field.localized || anyParentLocalized,
                        blockData,
                        clientFieldSchemaMap,
                        collectionSlug,
                        data: data?.[field.name] || {},
                        fields: field.fields,
                        fieldSchemaMap,
                        filter,
                        forceFullValue,
                        fullData,
                        includeSchema,
                        mockRSCs,
                        omitParents,
                        operation,
                        parentIndexPath: '',
                        parentPassesCondition: passesCondition,
                        parentPath: path,
                        parentSchemaPath: schemaPath,
                        permissions: typeof fieldPermissions === 'boolean' ? fieldPermissions : fieldPermissions?.fields,
                        preferences,
                        previousFormState,
                        readOnly,
                        renderAllFields,
                        renderFieldFn,
                        req,
                        select: typeof groupSelect === 'object' ? groupSelect : undefined,
                        selectMode,
                        skipConditionChecks,
                        skipValidation,
                        state
                    });
                    break;
                }
            case 'relationship':
            case 'upload':
                {
                    if (field.filterOptions) {
                        if (typeof field.filterOptions === 'object') {
                            if (typeof field.relationTo === 'string') {
                                fieldState.filterOptions = {
                                    [field.relationTo]: field.filterOptions
                                };
                            } else {
                                fieldState.filterOptions = field.relationTo.reduce((acc, relation)=>{
                                    acc[relation] = field.filterOptions;
                                    return acc;
                                }, {});
                            }
                        }
                        if (typeof field.filterOptions === 'function') {
                            const query = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$resolveFilterOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveFilterOptions"])(field.filterOptions, {
                                id,
                                blockData,
                                data: fullData,
                                relationTo: field.relationTo,
                                req,
                                siblingData: data,
                                user: req.user
                            });
                            fieldState.filterOptions = query;
                        }
                    }
                    if (field.hasMany) {
                        const relationshipValue = Array.isArray(data[field.name]) ? data[field.name].map((relationship)=>{
                            if (Array.isArray(field.relationTo)) {
                                return {
                                    relationTo: relationship.relationTo,
                                    value: relationship.value && typeof relationship.value === 'object' ? relationship.value?.id : relationship.value
                                };
                            }
                            if (typeof relationship === 'object' && relationship !== null) {
                                return relationship.id;
                            }
                            return relationship;
                        }) : undefined;
                        fieldState.value = relationshipValue;
                        fieldState.initialValue = relationshipValue;
                    } else if (Array.isArray(field.relationTo)) {
                        if (data[field.name] && typeof data[field.name] === 'object' && 'relationTo' in data[field.name] && 'value' in data[field.name]) {
                            const value = typeof data[field.name]?.value === 'object' && data[field.name]?.value && 'id' in data[field.name].value ? data[field.name].value.id : data[field.name].value;
                            const relationshipValue = {
                                relationTo: data[field.name]?.relationTo,
                                value
                            };
                            fieldState.value = relationshipValue;
                            fieldState.initialValue = relationshipValue;
                        }
                    } else {
                        const relationshipValue = data[field.name] && typeof data[field.name] === 'object' && 'id' in data[field.name] ? data[field.name].id : data[field.name];
                        fieldState.value = relationshipValue;
                        fieldState.initialValue = relationshipValue;
                    }
                    if (!filter || filter(args)) {
                        state[path] = fieldState;
                    }
                    break;
                }
            case 'select':
                {
                    if (typeof field.filterOptions === 'function') {
                        fieldState.selectFilterOptions = field.filterOptions({
                            data: fullData,
                            options: field.options,
                            req,
                            siblingData: data
                        });
                    }
                    if (data[field.name] !== undefined) {
                        fieldState.value = data[field.name];
                        fieldState.initialValue = data[field.name];
                    }
                    if (!filter || filter(args)) {
                        state[path] = fieldState;
                    }
                    break;
                }
            default:
                {
                    if (data[field.name] !== undefined) {
                        fieldState.value = data[field.name];
                        fieldState.initialValue = data[field.name];
                    }
                    // Add field to state
                    if (!filter || filter(args)) {
                        state[path] = fieldState;
                    }
                    break;
                }
        }
    } else if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldHasSubFields"])(field) && !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldAffectsData"])(field)) {
        // Handle field types that do not use names (row, collapsible, unnamed group etc)
        if (!filter || filter(args)) {
            state[path] = {
                disableFormData: true
            };
            // Presentational containers are hidden client-side via `withCondition`, which reads
            // `passesCondition` from their own state entry. Must be set here since these fields
            // are excluded from the short-circuit above (which would otherwise carry the flag).
            if (passesCondition === false) {
                state[path].passesCondition = false;
            }
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
            id,
            mockRSCs,
            select,
            selectMode,
            // passthrough parent functionality
            addErrorPathToParent: addErrorPathToParentArg,
            anyParentLocalized: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldIsLocalized"])(field) || anyParentLocalized,
            blockData,
            clientFieldSchemaMap,
            collectionSlug,
            data,
            fields: field.fields,
            fieldSchemaMap,
            filter,
            forceFullValue,
            fullData,
            includeSchema,
            omitParents,
            operation,
            parentIndexPath: indexPath,
            parentPassesCondition: passesCondition,
            parentPath: path,
            parentSchemaPath: schemaPath,
            permissions: parentPermissions,
            preferences,
            previousFormState,
            readOnly,
            renderAllFields,
            renderFieldFn,
            req,
            skipConditionChecks,
            skipValidation,
            state
        });
    } else if (field.type === 'tab') {
        const isNamedTab = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["tabHasName"])(field);
        if (isNamedTab) {
            const shouldContinue = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["stripUnselectedFields"])({
                field: {
                    ...field,
                    type: 'tab'
                },
                select,
                selectMode,
                siblingDoc: data?.[field.name] || {}
            });
            if (!shouldContinue) {
                return;
            }
        }
        // Tab visibility on the client is keyed by `field.id`, not `path` (like all other fields).
        if (field?.id) {
            state[field.id] = {
                passesCondition
            };
            // Flag newly added tab entries so the client accepts them during merge.
            // Otherwise, tabs revealed after a hidden ancestor becomes visible would never make it into client form state.
            if (!renderAllFields && !previousFormState?.[field.id]) {
                state[field.id].addedByServer = true;
            }
        }
        if (!passesCondition) {
            return;
        }
        let childPermissions;
        let tabSelect;
        if (isNamedTab) {
            if (parentPermissions === true) {
                childPermissions = true;
            } else {
                const tabPermissions = parentPermissions?.[field.name];
                childPermissions = tabPermissions === true ? true : tabPermissions?.fields;
            }
            if (typeof select?.[field.name] === 'object') {
                tabSelect = select?.[field.name];
            }
        } else {
            childPermissions = parentPermissions;
            tabSelect = select;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
            id,
            addErrorPathToParent: addErrorPathToParentArg,
            anyParentLocalized: field.localized || anyParentLocalized,
            blockData,
            clientFieldSchemaMap,
            collectionSlug,
            data: isNamedTab ? data?.[field.name] || {} : data,
            fields: field.fields,
            fieldSchemaMap,
            filter,
            forceFullValue,
            fullData,
            includeSchema,
            mockRSCs,
            omitParents,
            operation,
            parentIndexPath: indexPath,
            parentPassesCondition: passesCondition,
            parentPath: path,
            parentSchemaPath: schemaPath,
            permissions: childPermissions,
            preferences,
            previousFormState,
            readOnly,
            renderAllFields,
            renderFieldFn,
            req,
            select: tabSelect,
            selectMode,
            skipConditionChecks,
            skipValidation,
            state
        });
    } else if (field.type === 'tabs') {
        if (!filter || filter(args)) {
            state[path] = {
                disableFormData: true
            };
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
            id,
            addErrorPathToParent: addErrorPathToParentArg,
            anyParentLocalized: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldIsLocalized"])(field) || anyParentLocalized,
            blockData,
            clientFieldSchemaMap,
            collectionSlug,
            data,
            fields: field.tabs.map((tab)=>({
                    ...tab,
                    type: 'tab'
                })),
            fieldSchemaMap,
            filter,
            forceFullValue,
            fullData,
            includeSchema,
            omitParents,
            operation,
            parentIndexPath: indexPath,
            parentPassesCondition: passesCondition,
            parentPath: path,
            parentSchemaPath: schemaPath,
            permissions: parentPermissions,
            preferences,
            previousFormState,
            readOnly,
            renderAllFields,
            renderFieldFn,
            req,
            select,
            selectMode,
            skipConditionChecks,
            skipValidation,
            state
        });
    } else if (field.type === 'ui') {
        if (!filter || filter(args)) {
            state[path] = fieldState;
            state[path].disableFormData = true;
        }
    }
    if (renderFieldFn && !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldIsHiddenOrDisabled"])(field)) {
        const fieldConfig = fieldSchemaMap.get(schemaPath);
        if (!fieldConfig && !mockRSCs) {
            if (schemaPath.endsWith('.blockType')) {
                return;
            } else {
                throw new Error(`Field config not found for ${schemaPath}`);
            }
        }
        if (!state[path]) {
            // Some fields (ie `Tab`) do not live in form state
            // therefore we cannot attach customComponents to them
            return;
        }
        if (addedByServer) {
            state[path].addedByServer = addedByServer;
        }
        renderFieldFn({
            id,
            clientFieldSchemaMap,
            collectionSlug,
            data: fullData,
            fieldConfig: fieldConfig,
            fieldSchemaMap,
            fieldState: state[path],
            formState: state,
            indexPath,
            lastRenderedPath,
            mockRSCs,
            operation,
            parentPath,
            parentSchemaPath,
            path,
            permissions: fieldPermissions,
            preferences,
            previousFieldState: previousFormState?.[path],
            readOnly,
            renderAllFields,
            req,
            schemaPath,
            siblingData: data
        });
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "calculateDefaultValues",
    ()=>calculateDefaultValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/iterateFields.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const calculateDefaultValues = async ({ id, data, fields, locale, req, select, selectMode, user })=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
        id,
        data,
        fields,
        locale,
        req,
        select,
        selectMode,
        siblingData: data,
        user
    });
    return data;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/iterateFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "iterateFields",
    ()=>iterateFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/promise.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const iterateFields = async ({ id, data, fields, locale, req, select, selectMode, siblingData, user })=>{
    const promises = [];
    fields.forEach((field)=>{
        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultValuePromise"])({
            id,
            data,
            field,
            locale,
            req,
            select,
            selectMode,
            siblingData,
            user
        }));
    });
    await Promise.all(promises);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/promise.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "defaultValuePromise",
    ()=>defaultValuePromise
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/iterateFields.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const defaultValuePromise = async ({ id, data, field, locale, req, select, selectMode, siblingData, user })=>{
    const shouldContinue = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["stripUnselectedFields"])({
        field,
        select,
        selectMode,
        siblingDoc: siblingData
    });
    if (!shouldContinue) {
        return;
    }
    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldAffectsData"])(field)) {
        if (typeof siblingData[field.name] === 'undefined' && typeof field.defaultValue !== 'undefined') {
            try {
                siblingData[field.name] = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["getDefaultValue"])({
                    defaultValue: field.defaultValue,
                    locale,
                    req,
                    user,
                    value: siblingData[field.name]
                });
            } catch (err) {
                req.payload.logger.error({
                    err,
                    msg: `Error calculating default value for field: ${field.name}`
                });
            }
        }
    }
    // Traverse subfields
    switch(field.type){
        case 'array':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    const arraySelect = select?.[field.name];
                    rows.forEach((row)=>{
                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                            id,
                            data,
                            fields: field.fields,
                            locale,
                            req,
                            select: typeof arraySelect === 'object' ? arraySelect : undefined,
                            selectMode,
                            siblingData: row,
                            user
                        }));
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'blocks':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row)=>{
                        const blockTypeToMatch = row.blockType;
                        const block = req.payload.blocks[blockTypeToMatch] ?? (field.blockReferences ?? field.blocks).find((blockType)=>typeof blockType !== 'string' && blockType.slug === blockTypeToMatch);
                        const { blockSelect, blockSelectMode } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["getBlockSelect"])({
                            block,
                            select: select?.[field.name],
                            selectMode
                        });
                        if (block) {
                            row.blockType = blockTypeToMatch;
                            promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                                id,
                                data,
                                fields: block.fields,
                                locale,
                                req,
                                select: typeof blockSelect === 'object' ? blockSelect : undefined,
                                selectMode: blockSelectMode,
                                siblingData: row,
                                user
                            }));
                        }
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'collapsible':
        case 'row':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                    id,
                    data,
                    fields: field.fields,
                    locale,
                    req,
                    select,
                    selectMode,
                    siblingData,
                    user
                });
                break;
            }
        case 'group':
            {
                if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldAffectsData"])(field)) {
                    if (typeof siblingData[field.name] !== 'object') {
                        siblingData[field.name] = {};
                    }
                    const groupData = siblingData[field.name];
                    const groupSelect = select?.[field.name];
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                        id,
                        data,
                        fields: field.fields,
                        locale,
                        req,
                        select: typeof groupSelect === 'object' ? groupSelect : undefined,
                        selectMode,
                        siblingData: groupData,
                        user
                    });
                } else {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                        id,
                        data,
                        fields: field.fields,
                        locale,
                        req,
                        select,
                        selectMode,
                        siblingData,
                        user
                    });
                }
                break;
            }
        case 'tab':
            {
                let tabSiblingData;
                const isNamedTab = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["tabHasName"])(field);
                let tabSelect;
                if (isNamedTab) {
                    if (typeof siblingData[field.name] !== 'object') {
                        siblingData[field.name] = {};
                    }
                    tabSiblingData = siblingData[field.name];
                    if (typeof select?.[field.name] === 'object') {
                        tabSelect = select?.[field.name];
                    }
                } else {
                    tabSiblingData = siblingData;
                    tabSelect = select;
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                    id,
                    data,
                    fields: field.fields,
                    locale,
                    req,
                    select: tabSelect,
                    selectMode,
                    siblingData: tabSiblingData,
                    user
                });
                break;
            }
        case 'tabs':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                    id,
                    data,
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    locale,
                    req,
                    select,
                    selectMode,
                    siblingData,
                    user
                });
                break;
            }
        default:
            {
                break;
            }
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "fieldSchemasToFormState",
    ()=>fieldSchemasToFormState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/iterateFields.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const fieldSchemasToFormState = async ({ id, clientFieldSchemaMap, collectionSlug, data = {}, documentData, fields, fieldSchemaMap, initialBlockData, mockRSCs, operation, permissions, preferences, previousFormState, readOnly, renderAllFields, renderFieldFn, req, schemaPath, select, selectMode, skipValidation })=>{
    if (!clientFieldSchemaMap && renderFieldFn) {
        // eslint-disable-next-line no-console
        console.warn('clientFieldSchemaMap is not passed to fieldSchemasToFormState - this will reduce performance');
    }
    if (fields && fields.length) {
        const state = {};
        const dataWithDefaultValues = {
            ...data
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateDefaultValues"])({
            id,
            data: dataWithDefaultValues,
            fields,
            locale: req.locale,
            req,
            select,
            selectMode,
            siblingData: dataWithDefaultValues,
            user: req.user
        });
        let fullData = dataWithDefaultValues;
        if (documentData) {
            // By the time this function is used to get form state for nested forms, their default values should have already been calculated
            // => no need to run calculateDefaultValues here
            fullData = documentData;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
            id,
            addErrorPathToParent: null,
            blockData: initialBlockData,
            clientFieldSchemaMap,
            collectionSlug,
            data: dataWithDefaultValues,
            fields,
            fieldSchemaMap,
            fullData,
            mockRSCs,
            operation,
            parentIndexPath: '',
            parentPassesCondition: true,
            parentPath: '',
            parentSchemaPath: schemaPath,
            permissions,
            preferences,
            previousFormState,
            readOnly,
            renderAllFields,
            renderFieldFn,
            req,
            select,
            selectMode,
            skipValidation,
            state
        });
        return state;
    }
    return {};
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/isRowCollapsed.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRowCollapsed",
    ()=>isRowCollapsed
]);
function isRowCollapsed({ collapsedPrefs, field, previousRow, row }) {
    if (previousRow && 'collapsed' in previousRow) {
        return previousRow.collapsed ?? false;
    }
    // If previousFormState is `undefined`, check preferences
    if (collapsedPrefs !== undefined) {
        return collapsedPrefs.includes(row.id) // Check if collapsed in preferences
        ;
    }
    // If neither exists, fallback to `field.admin.initCollapsed`
    return field.admin.initCollapsed;
}
}),
"[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/iterateFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "iterateFields",
    ()=>iterateFields
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$addFieldStatePromise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/addFieldStatePromise.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$addFieldStatePromise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$addFieldStatePromise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const iterateFields = async ({ id, addErrorPathToParent: addErrorPathToParentArg, anyParentLocalized = false, blockData, clientFieldSchemaMap, collectionSlug, data, fields, fieldSchemaMap, filter, forceFullValue = false, fullData, includeSchema = false, mockRSCs, omitParents = false, operation, parentIndexPath, parentPassesCondition = true, parentPath, parentSchemaPath, permissions, preferences, previousFormState, readOnly, renderAllFields, renderFieldFn: renderFieldFn, req, select, selectMode, skipConditionChecks = false, skipValidation = false, state = {} })=>{
    const promises = [];
    fields.forEach((field, fieldIndex)=>{
        let passesCondition = true;
        const { indexPath, path, schemaPath } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["getFieldPaths"])({
            field,
            index: fieldIndex,
            parentIndexPath,
            parentPath,
            parentSchemaPath
        });
        if (path !== 'id') {
            const shouldContinue = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["stripUnselectedFields"])({
                field,
                select,
                selectMode,
                siblingDoc: data
            });
            if (!shouldContinue) {
                return;
            }
        }
        const pathSegments = path ? path.split('.') : [];
        if (!skipConditionChecks) {
            try {
                passesCondition = Boolean((field?.admin?.condition ? Boolean(field.admin.condition(fullData || {}, data || {}, {
                    blockData,
                    operation,
                    path: pathSegments,
                    user: req.user
                })) : true) && parentPassesCondition);
            } catch (err) {
                passesCondition = false;
                req.payload.logger.error({
                    err,
                    msg: `Error evaluating field condition at path: ${path}`
                });
            }
        }
        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$addFieldStatePromise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addFieldStatePromise"])({
            id,
            addErrorPathToParent: addErrorPathToParentArg,
            anyParentLocalized,
            blockData,
            clientFieldSchemaMap,
            collectionSlug,
            data,
            field,
            fieldIndex,
            fieldSchemaMap,
            filter,
            forceFullValue,
            fullData,
            includeSchema,
            indexPath,
            mockRSCs,
            omitParents,
            operation,
            parentIndexPath,
            parentPath,
            parentPermissions: permissions,
            parentSchemaPath,
            passesCondition,
            path,
            preferences,
            previousFormState,
            readOnly,
            renderAllFields,
            renderFieldFn,
            req,
            schemaPath,
            select,
            selectMode,
            skipConditionChecks,
            skipValidation,
            state
        }));
    });
    await Promise.all(promises);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/ui/dist/utilities/buildFieldSchemaMap/traverseFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "traverseFields",
    ()=>traverseFields
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import, [project]/node_modules/payload)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const traverseFields = ({ config, fields, i18n, parentIndexPath, parentSchemaPath, schemaMap })=>{
    for (const [index, field] of fields.entries()){
        const { indexPath, schemaPath } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["getFieldPaths"])({
            field,
            index,
            parentIndexPath,
            parentSchemaPath
        });
        schemaMap.set(schemaPath, field);
        switch(field.type){
            case 'array':
                traverseFields({
                    config,
                    fields: field.fields,
                    i18n,
                    parentIndexPath: '',
                    parentSchemaPath: schemaPath,
                    schemaMap
                });
                break;
            case 'blocks':
                ;
                (field.blockReferences ?? field.blocks).map((_block)=>{
                    // TODO: iterate over blocks mapped to block slug in v4, or pass through payload.blocks
                    const block = typeof _block === 'string' ? config.blocks.find((b)=>b.slug === _block) : _block;
                    const blockSchemaPath = `${schemaPath}.${block.slug}`;
                    schemaMap.set(blockSchemaPath, block);
                    traverseFields({
                        config,
                        fields: block.fields,
                        i18n,
                        parentIndexPath: '',
                        parentSchemaPath: schemaPath + '.' + block.slug,
                        schemaMap
                    });
                });
                break;
            case 'collapsible':
            case 'row':
                traverseFields({
                    config,
                    fields: field.fields,
                    i18n,
                    parentIndexPath: indexPath,
                    parentSchemaPath: schemaPath,
                    schemaMap
                });
                break;
            case 'group':
                if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["fieldAffectsData"])(field)) {
                    traverseFields({
                        config,
                        fields: field.fields,
                        i18n,
                        parentIndexPath: '',
                        parentSchemaPath: schemaPath,
                        schemaMap
                    });
                } else {
                    traverseFields({
                        config,
                        fields: field.fields,
                        i18n,
                        parentIndexPath: indexPath,
                        parentSchemaPath: schemaPath,
                        schemaMap
                    });
                }
                break;
            case 'richText':
                {
                    if (!field?.editor) {
                        throw new __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                        ;
                    }
                    if (typeof field.editor === 'function') {
                        throw new Error('Attempted to access unsanitized rich text editor.');
                    }
                    if (typeof field.editor.generateSchemaMap === 'function') {
                        field.editor.generateSchemaMap({
                            config,
                            field,
                            i18n,
                            schemaMap,
                            schemaPath
                        });
                    }
                    break;
                }
            case 'tab':
                {
                    const isNamedTab = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["tabHasName"])(field);
                    traverseFields({
                        config,
                        fields: field.fields,
                        i18n,
                        parentIndexPath: isNamedTab ? '' : indexPath,
                        parentSchemaPath: schemaPath,
                        schemaMap
                    });
                    break;
                }
            case 'tabs':
                {
                    traverseFields({
                        config,
                        fields: field.tabs.map((tab)=>({
                                ...tab,
                                type: 'tab'
                            })),
                        i18n,
                        parentIndexPath: indexPath,
                        parentSchemaPath: schemaPath,
                        schemaMap
                    });
                    break;
                }
        }
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/ui/dist/utilities/resolveFilterOptions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveFilterOptions",
    ()=>resolveFilterOptions
]);
const resolveFilterOptions = async (filterOptions, options)=>{
    const { relationTo } = options;
    const relations = Array.isArray(relationTo) ? relationTo : [
        relationTo
    ];
    const query = {};
    if (typeof filterOptions !== 'undefined') {
        await Promise.all(relations.map(async (relation)=>{
            query[relation] = typeof filterOptions === 'function' ? await filterOptions({
                ...options,
                relationTo: relation
            }) : filterOptions;
            if (query[relation] === true) {
                query[relation] = {};
            }
            // this is an ugly way to prevent results from being returned
            if (query[relation] === false) {
                query[relation] = {
                    id: {
                        exists: false
                    }
                };
            }
        }));
    }
    return query;
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/node-config-provider/configLoader.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadConfig",
    ()=>loadConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$chain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/property-provider/chain.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$memoize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/property-provider/memoize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$node$2d$config$2d$provider$2f$fromEnv$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/node-config-provider/fromEnv.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$node$2d$config$2d$provider$2f$fromSharedConfigFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/node-config-provider/fromSharedConfigFiles.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$node$2d$config$2d$provider$2f$fromStatic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/node-config-provider/fromStatic.js [app-rsc] (ecmascript)");
;
;
;
;
;
const loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {})=>{
    const { signingName, logger } = configuration;
    const envOptions = {
        signingName,
        logger
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$memoize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["memoize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$chain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chain"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$node$2d$config$2d$provider$2f$fromEnv$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromEnv"])(environmentVariableSelector, envOptions), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$node$2d$config$2d$provider$2f$fromSharedConfigFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromSharedConfigFiles"])(configFileSelector, configuration), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$node$2d$config$2d$provider$2f$fromStatic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromStatic"])(defaultValue)));
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/node-config-provider/fromEnv.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromEnv",
    ()=>fromEnv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$CredentialsProviderError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/property-provider/CredentialsProviderError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$node$2d$config$2d$provider$2f$getSelectorName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/node-config-provider/getSelectorName.js [app-rsc] (ecmascript)");
;
;
const fromEnv = (envVarSelector, options)=>async ()=>{
        try {
            const config = envVarSelector(process.env, options);
            if (config === undefined) {
                throw new Error();
            }
            return config;
        } catch (e) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$CredentialsProviderError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CredentialsProviderError"](e.message || `Not found in ENV: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$node$2d$config$2d$provider$2f$getSelectorName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSelectorName"])(envVarSelector.toString())}`, {
                logger: options?.logger
            });
        }
    };
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/node-config-provider/fromSharedConfigFiles.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromSharedConfigFiles",
    ()=>fromSharedConfigFiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$CredentialsProviderError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/property-provider/CredentialsProviderError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getProfileName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/getProfileName.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$loadSharedConfigFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/loadSharedConfigFiles.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$node$2d$config$2d$provider$2f$getSelectorName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/node-config-provider/getSelectorName.js [app-rsc] (ecmascript)");
;
;
;
;
const fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {})=>async ()=>{
        const profile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getProfileName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfileName"])(init);
        const { configFile, credentialsFile } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$loadSharedConfigFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadSharedConfigFiles"])(init);
        const profileFromCredentials = credentialsFile[profile] || {};
        const profileFromConfig = configFile[profile] || {};
        const mergedProfile = preferredFile === "config" ? {
            ...profileFromCredentials,
            ...profileFromConfig
        } : {
            ...profileFromConfig,
            ...profileFromCredentials
        };
        try {
            const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
            const configValue = configSelector(mergedProfile, cfgFile);
            if (configValue === undefined) {
                throw new Error();
            }
            return configValue;
        } catch (e) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$CredentialsProviderError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CredentialsProviderError"](e.message || `Not found in config files w/ profile [${profile}]: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$node$2d$config$2d$provider$2f$getSelectorName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSelectorName"])(configSelector.toString())}`, {
                logger: init.logger
            });
        }
    };
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/node-config-provider/fromStatic.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromStatic",
    ()=>fromStatic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$fromValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/property-provider/fromValue.js [app-rsc] (ecmascript)");
;
const isFunction = (func)=>typeof func === "function";
const fromStatic = (defaultValue)=>isFunction(defaultValue) ? async ()=>await defaultValue() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$fromValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromValue"])(defaultValue);
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/node-config-provider/getSelectorName.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSelectorName",
    ()=>getSelectorName
]);
function getSelectorName(functionString) {
    try {
        const constants = new Set(Array.from(functionString.match(/([A-Z_]){3,}/g) ?? []));
        constants.delete("CONFIG");
        constants.delete("CONFIG_PREFIX_SEPARATOR");
        constants.delete("ENV");
        return [
            ...constants
        ].join(", ");
    } catch (ignored) {
        return functionString;
    }
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/property-provider/CredentialsProviderError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CredentialsProviderError",
    ()=>CredentialsProviderError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$ProviderError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/property-provider/ProviderError.js [app-rsc] (ecmascript)");
;
class CredentialsProviderError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$ProviderError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProviderError"] {
    name = "CredentialsProviderError";
    constructor(message, options = true){
        super(message, options);
        Object.setPrototypeOf(this, CredentialsProviderError.prototype);
    }
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/property-provider/ProviderError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProviderError",
    ()=>ProviderError
]);
class ProviderError extends Error {
    name = "ProviderError";
    tryNextLink;
    constructor(message, options = true){
        let logger;
        let tryNextLink = true;
        if (typeof options === "boolean") {
            logger = undefined;
            tryNextLink = options;
        } else if (options != null && typeof options === "object") {
            logger = options.logger;
            tryNextLink = options.tryNextLink ?? true;
        }
        super(message);
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, ProviderError.prototype);
        logger?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
    }
    static from(error, options = true) {
        return Object.assign(new this(error.message, options), error);
    }
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/property-provider/chain.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chain",
    ()=>chain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$ProviderError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/property-provider/ProviderError.js [app-rsc] (ecmascript)");
;
const chain = (...providers)=>async ()=>{
        if (providers.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$property$2d$provider$2f$ProviderError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProviderError"]("No providers in chain");
        }
        let lastProviderError;
        for (const provider of providers){
            try {
                const credentials = await provider();
                return credentials;
            } catch (err) {
                lastProviderError = err;
                if (err?.tryNextLink) {
                    continue;
                }
                throw err;
            }
        }
        throw lastProviderError;
    };
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/property-provider/fromValue.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromValue",
    ()=>fromValue
]);
const fromValue = (staticValue)=>()=>Promise.resolve(staticValue);
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/property-provider/memoize.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memoize",
    ()=>memoize
]);
const memoize = (provider, isExpired, requiresRefresh)=>{
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async ()=>{
        if (!pending) {
            pending = provider();
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        } finally{
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options)=>{
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider();
            }
            return resolved;
        };
    }
    return async (options)=>{
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
        }
        if (isConstant) {
            return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
        }
        return resolved;
    };
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONFIG_PREFIX_SEPARATOR",
    ()=>CONFIG_PREFIX_SEPARATOR
]);
const CONFIG_PREFIX_SEPARATOR = ".";
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/getConfigData.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConfigData",
    ()=>getConfigData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$types$2f$dist$2d$es$2f$profile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/types/dist-es/profile.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/constants.js [app-rsc] (ecmascript)");
;
;
const getConfigData = (data)=>Object.entries(data).filter(([key])=>{
        const indexOfSeparator = key.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONFIG_PREFIX_SEPARATOR"]);
        if (indexOfSeparator === -1) {
            return false;
        }
        return Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$types$2f$dist$2d$es$2f$profile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IniSectionType"]).includes(key.substring(0, indexOfSeparator));
    }).reduce((acc, [key, value])=>{
        const indexOfSeparator = key.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONFIG_PREFIX_SEPARATOR"]);
        const updatedKey = key.substring(0, indexOfSeparator) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$types$2f$dist$2d$es$2f$profile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IniSectionType"].PROFILE ? key.substring(indexOfSeparator + 1) : key;
        acc[updatedKey] = value;
        return acc;
    }, {
        ...data.default && {
            default: data.default
        }
    });
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/getConfigFilepath.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENV_CONFIG_PATH",
    ()=>ENV_CONFIG_PATH,
    "getConfigFilepath",
    ()=>getConfigFilepath
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getHomeDir$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/getHomeDir.js [app-rsc] (ecmascript)");
;
;
const ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
const getConfigFilepath = ()=>process.env[ENV_CONFIG_PATH] || (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getHomeDir$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHomeDir"])(), ".aws", "config");
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/getCredentialsFilepath.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENV_CREDENTIALS_PATH",
    ()=>ENV_CREDENTIALS_PATH,
    "getCredentialsFilepath",
    ()=>getCredentialsFilepath
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getHomeDir$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/getHomeDir.js [app-rsc] (ecmascript)");
;
;
const ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
const getCredentialsFilepath = ()=>process.env[ENV_CREDENTIALS_PATH] || (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getHomeDir$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHomeDir"])(), ".aws", "credentials");
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/getHomeDir.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHomeDir",
    ()=>getHomeDir
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:os [external] (node:os, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
const homeDirCache = {};
const getHomeDirCacheKey = ()=>{
    if (process && process.geteuid) {
        return `${process.geteuid()}`;
    }
    return "DEFAULT";
};
const getHomeDir = ()=>{
    const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["sep"]}` } = process.env;
    if (HOME) return HOME;
    if (USERPROFILE) return USERPROFILE;
    if (HOMEPATH) return `${HOMEDRIVE}${HOMEPATH}`;
    const homeDirCacheKey = getHomeDirCacheKey();
    if (!homeDirCache[homeDirCacheKey]) homeDirCache[homeDirCacheKey] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["homedir"])();
    return homeDirCache[homeDirCacheKey];
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/getProfileName.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PROFILE",
    ()=>DEFAULT_PROFILE,
    "ENV_PROFILE",
    ()=>ENV_PROFILE,
    "getProfileName",
    ()=>getProfileName
]);
const ENV_PROFILE = "AWS_PROFILE";
const DEFAULT_PROFILE = "default";
const getProfileName = (init)=>init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/loadSharedConfigFiles.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadSharedConfigFiles",
    ()=>loadSharedConfigFiles
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getConfigData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/getConfigData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getConfigFilepath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/getConfigFilepath.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getCredentialsFilepath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/getCredentialsFilepath.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getHomeDir$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/getHomeDir.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$parseIni$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/parseIni.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$readFile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/readFile.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const swallowError = ()=>({});
;
const loadSharedConfigFiles = async (init = {})=>{
    const { filepath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getCredentialsFilepath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCredentialsFilepath"])(), configFilepath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getConfigFilepath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConfigFilepath"])() } = init;
    const homeDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getHomeDir$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHomeDir"])();
    const relativeHomeDirPrefix = "~/";
    let resolvedFilepath = filepath;
    if (filepath.startsWith(relativeHomeDirPrefix)) {
        resolvedFilepath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(homeDir, filepath.slice(2));
    }
    let resolvedConfigFilepath = configFilepath;
    if (configFilepath.startsWith(relativeHomeDirPrefix)) {
        resolvedConfigFilepath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(homeDir, configFilepath.slice(2));
    }
    const parsedFiles = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$readFile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readFile"])(resolvedConfigFilepath, {
            ignoreCache: init.ignoreCache
        }).then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$parseIni$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseIni"]).then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$getConfigData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConfigData"]).catch(swallowError),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$readFile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readFile"])(resolvedFilepath, {
            ignoreCache: init.ignoreCache
        }).then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$parseIni$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseIni"]).catch(swallowError)
    ]);
    return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1]
    };
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/parseIni.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseIni",
    ()=>parseIni
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$types$2f$dist$2d$es$2f$profile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/types/dist-es/profile.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/constants.js [app-rsc] (ecmascript)");
;
;
const prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@+.%:/]+)\2$/;
const profileNameBlockList = [
    "__proto__",
    "profile __proto__"
];
const parseIni = (iniData)=>{
    const map = {};
    let currentSection;
    let currentSubSection;
    for (const iniLine of iniData.split(/\r?\n/)){
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
            currentSection = undefined;
            currentSubSection = undefined;
            const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
            const matches = prefixKeyRegex.exec(sectionName);
            if (matches) {
                const [, prefix, , name] = matches;
                if (Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$types$2f$dist$2d$es$2f$profile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IniSectionType"]).includes(prefix)) {
                    currentSection = [
                        prefix,
                        name
                    ].join(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONFIG_PREFIX_SEPARATOR"]);
                }
            } else {
                currentSection = sectionName;
            }
            if (profileNameBlockList.includes(sectionName)) {
                throw new Error(`Found invalid profile name "${sectionName}"`);
            }
        } else if (currentSection) {
            const indexOfEqualsSign = trimmedLine.indexOf("=");
            if (![
                0,
                -1
            ].includes(indexOfEqualsSign)) {
                const [name, value] = [
                    trimmedLine.substring(0, indexOfEqualsSign).trim(),
                    trimmedLine.substring(indexOfEqualsSign + 1).trim()
                ];
                if (value === "") {
                    currentSubSection = name;
                } else {
                    if (currentSubSection && iniLine.trimStart() === iniLine) {
                        currentSubSection = undefined;
                    }
                    map[currentSection] = map[currentSection] || {};
                    const key = currentSubSection ? [
                        currentSubSection,
                        name
                    ].join(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONFIG_PREFIX_SEPARATOR"]) : name;
                    map[currentSection][key] = value;
                }
            }
        }
    }
    return map;
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/readFile.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fileIntercept",
    ()=>fileIntercept,
    "filePromises",
    ()=>filePromises,
    "readFile",
    ()=>readFile
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
;
const filePromises = {};
const fileIntercept = {};
const readFile = (path, options)=>{
    if (fileIntercept[path] !== undefined) {
        return fileIntercept[path];
    }
    if (!filePromises[path] || options?.ignoreCache) {
        filePromises[path] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(path, "utf8");
    }
    return filePromises[path];
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/util-config-provider/booleanSelector.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "booleanSelector",
    ()=>booleanSelector
]);
const booleanSelector = (obj, key, type)=>{
    if (!(key in obj)) return undefined;
    if (obj[key] === "true") return true;
    if (obj[key] === "false") return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/config/util-config-provider/types.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectorType",
    ()=>SelectorType
]);
var SelectorType;
(function(SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "endpointMiddleware",
    ()=>endpointMiddleware,
    "getEndpointFromInstructions",
    ()=>getEndpointFromInstructions,
    "getEndpointPlugin",
    ()=>getEndpointPlugin,
    "resolveEndpointConfig",
    ()=>resolveEndpointConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$getEndpointFromConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointFromConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$getEndpointFromInstructions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointFromInstructions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$endpointMiddleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/endpointMiddleware.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$getEndpointPlugin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/getEndpointPlugin.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$resolveEndpointConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/resolveEndpointConfig.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const getEndpointFromInstructions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$getEndpointFromInstructions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bindGetEndpointFromInstructions"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$getEndpointFromConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEndpointFromConfig"]);
const resolveEndpointConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$resolveEndpointConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bindResolveEndpointConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$getEndpointFromConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEndpointFromConfig"]);
const endpointMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$endpointMiddleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bindEndpointMiddleware"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$getEndpointFromConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEndpointFromConfig"]);
const getEndpointPlugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$getEndpointPlugin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bindGetEndpointPlugin"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$getEndpointFromConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEndpointFromConfig"]);
;
;
;
;
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/createConfigValueProvider.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createConfigValueProvider",
    ()=>createConfigValueProvider
]);
const createConfigValueProvider = (configKey, canonicalEndpointParamKey, config, isClientContextParam = false)=>{
    const configProvider = async ()=>{
        let configValue;
        if (isClientContextParam) {
            const clientContextParams = config.clientContextParams;
            const nestedValue = clientContextParams?.[configKey];
            configValue = nestedValue ?? config[configKey] ?? config[canonicalEndpointParamKey];
        } else {
            configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        }
        if (typeof configValue === "function") {
            return configValue();
        }
        return configValue;
    };
    if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async ()=>{
            const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
            const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
            return configValue;
        };
    }
    if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
        return async ()=>{
            const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
            const configValue = credentials?.accountId ?? credentials?.AccountId;
            return configValue;
        };
    }
    if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async ()=>{
            if (config.isCustomEndpoint === false) {
                return undefined;
            }
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
                if ("url" in endpoint) {
                    return endpoint.url.href;
                }
                if ("hostname" in endpoint) {
                    const { protocol, hostname, port, path } = endpoint;
                    return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
                }
            }
            return endpoint;
        };
    }
    return configProvider;
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointFromConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEndpointFromConfig",
    ()=>getEndpointFromConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$node$2d$config$2d$provider$2f$configLoader$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/node-config-provider/configLoader.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$getEndpointUrlConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointUrlConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$getIgnoreConfiguredEndpointUrls$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getIgnoreConfiguredEndpointUrls.js [app-rsc] (ecmascript)");
;
;
;
const getEndpointFromConfig = async (serviceId)=>{
    const ignore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$node$2d$config$2d$provider$2f$configLoader$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$getIgnoreConfiguredEndpointUrls$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ignoreConfiguredEndpointUrlsConfigSelectors"])();
    if (ignore) {
        return undefined;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$node$2d$config$2d$provider$2f$configLoader$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadConfig"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$getEndpointUrlConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEndpointUrlConfig"])(serviceId ?? ""))();
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointFromInstructions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bindGetEndpointFromInstructions",
    ()=>bindGetEndpointFromInstructions,
    "resolveParams",
    ()=>resolveParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$service$2d$customizations$2f$s3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/service-customizations/s3.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$createConfigValueProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/createConfigValueProvider.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$toEndpointV1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/toEndpointV1.js [app-rsc] (ecmascript)");
;
;
;
function bindGetEndpointFromInstructions(getEndpointFromConfig) {
    return async (commandInput, instructionsSupplier, clientConfig, context)=>{
        if (!clientConfig.isCustomEndpoint && !clientConfig.ignoreConfiguredEndpointUrls) {
            let endpointFromConfig;
            if (clientConfig.serviceConfiguredEndpoint) {
                endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
            } else {
                endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId);
            }
            if (endpointFromConfig) {
                clientConfig.endpoint = ()=>Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$toEndpointV1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toEndpointV1"])(endpointFromConfig));
                clientConfig.isCustomEndpoint = true;
                context?.logger?.debug?.(`@smithy/core/endpoints - resolved endpoint from config: ${endpointFromConfig}`);
            }
        }
        const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
        if (typeof clientConfig.endpointProvider !== "function") {
            throw new Error("config.endpointProvider is not set.");
        }
        const endpoint = clientConfig.endpointProvider(endpointParams, context);
        if (clientConfig.isCustomEndpoint && clientConfig.endpoint) {
            const customEndpoint = await clientConfig.endpoint();
            if (customEndpoint?.headers) {
                endpoint.headers ??= {};
                for (const [name, value] of Object.entries(customEndpoint.headers)){
                    endpoint.headers[name] = Array.isArray(value) ? value : [
                        value
                    ];
                }
            }
        }
        return endpoint;
    };
}
const resolveParams = async (commandInput, instructionsSupplier, clientConfig)=>{
    const endpointParams = {};
    const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
    for (const [name, instruction] of Object.entries(instructions)){
        switch(instruction.type){
            case "staticContextParams":
                endpointParams[name] = instruction.value;
                break;
            case "contextParams":
                endpointParams[name] = commandInput[instruction.name];
                break;
            case "clientContextParams":
            case "builtInParams":
                endpointParams[name] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$createConfigValueProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createConfigValueProvider"])(instruction.name, name, clientConfig, instruction.type !== "builtInParams")();
                break;
            case "operationContextParams":
                endpointParams[name] = instruction.get(commandInput);
                break;
            default:
                throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
    }
    if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$service$2d$customizations$2f$s3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveParamsForS3"])(endpointParams);
    }
    return endpointParams;
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointUrlConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONFIG_ENDPOINT_URL",
    ()=>CONFIG_ENDPOINT_URL,
    "ENV_ENDPOINT_URL",
    ()=>ENV_ENDPOINT_URL,
    "getEndpointUrlConfig",
    ()=>getEndpointUrlConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/shared-ini-file-loader/constants.js [app-rsc] (ecmascript)");
;
const ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
const CONFIG_ENDPOINT_URL = "endpoint_url";
const getEndpointUrlConfig = (serviceId)=>({
        environmentVariableSelector: (env)=>{
            const serviceSuffixParts = serviceId.split(" ").map((w)=>w.toUpperCase());
            const serviceEndpointUrl = env[[
                ENV_ENDPOINT_URL,
                ...serviceSuffixParts
            ].join("_")];
            if (serviceEndpointUrl) return serviceEndpointUrl;
            const endpointUrl = env[ENV_ENDPOINT_URL];
            if (endpointUrl) return endpointUrl;
            return undefined;
        },
        configFileSelector: (profile, config)=>{
            if (profile.services) {
                const servicesSectionKey = [
                    "services",
                    profile.services
                ].join(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONFIG_PREFIX_SEPARATOR"]);
                if (!config || !config[servicesSectionKey]) {
                    throw new Error(`The services section "${profile.services}" specified in the profile is not present in the shared configuration file.`);
                }
                const servicesSection = config[servicesSectionKey];
                const servicePrefixParts = serviceId.split(" ").map((w)=>w.toLowerCase());
                const endpointUrl = servicesSection[[
                    servicePrefixParts.join("_"),
                    CONFIG_ENDPOINT_URL
                ].join(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$shared$2d$ini$2d$file$2d$loader$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONFIG_PREFIX_SEPARATOR"])];
                if (endpointUrl) return endpointUrl;
            }
            const endpointUrl = profile[CONFIG_ENDPOINT_URL];
            if (endpointUrl) return endpointUrl;
            return undefined;
        },
        default: undefined
    });
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getIgnoreConfiguredEndpointUrls.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONFIG_IGNORE_CONFIGURED_ENDPOINT_URLS",
    ()=>CONFIG_IGNORE_CONFIGURED_ENDPOINT_URLS,
    "ENV_IGNORE_CONFIGURED_ENDPOINT_URLS",
    ()=>ENV_IGNORE_CONFIGURED_ENDPOINT_URLS,
    "ignoreConfiguredEndpointUrlsConfigSelectors",
    ()=>ignoreConfiguredEndpointUrlsConfigSelectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$util$2d$config$2d$provider$2f$booleanSelector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/util-config-provider/booleanSelector.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$util$2d$config$2d$provider$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/config/util-config-provider/types.js [app-rsc] (ecmascript)");
;
const ENV_IGNORE_CONFIGURED_ENDPOINT_URLS = "AWS_IGNORE_CONFIGURED_ENDPOINT_URLS";
const CONFIG_IGNORE_CONFIGURED_ENDPOINT_URLS = "ignore_configured_endpoint_urls";
const ignoreConfiguredEndpointUrlsConfigSelectors = {
    environmentVariableSelector: (env)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$util$2d$config$2d$provider$2f$booleanSelector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["booleanSelector"])(env, ENV_IGNORE_CONFIGURED_ENDPOINT_URLS, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$util$2d$config$2d$provider$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].ENV),
    configFileSelector: (profile)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$util$2d$config$2d$provider$2f$booleanSelector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["booleanSelector"])(profile, CONFIG_IGNORE_CONFIGURED_ENDPOINT_URLS, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$config$2f$util$2d$config$2d$provider$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].CONFIG),
    default: false
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/endpointMiddleware.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bindEndpointMiddleware",
    ()=>bindEndpointMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$getSmithyContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/getSmithyContext.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$getEndpointFromInstructions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointFromInstructions.js [app-rsc] (ecmascript)");
;
;
function setFeature(context, feature, value) {
    if (!context.__smithy_context) {
        context.__smithy_context = {
            features: {}
        };
    } else if (!context.__smithy_context.features) {
        context.__smithy_context.features = {};
    }
    context.__smithy_context.features[feature] = value;
}
function bindEndpointMiddleware(getEndpointFromConfig) {
    const getEndpointFromInstructions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$adaptors$2f$getEndpointFromInstructions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bindGetEndpointFromInstructions"])(getEndpointFromConfig);
    return ({ config, instructions })=>{
        return (next, context)=>async (args)=>{
                if (config.isCustomEndpoint) {
                    setFeature(context, "ENDPOINT_OVERRIDE", "N");
                }
                const endpoint = await getEndpointFromInstructions(args.input, {
                    getEndpointParameterInstructions () {
                        return instructions;
                    }
                }, {
                    ...config
                }, context);
                context.endpointV2 = endpoint;
                context.authSchemes = endpoint.properties?.authSchemes;
                const authScheme = context.authSchemes?.[0];
                if (authScheme) {
                    context["signing_region"] = authScheme.signingRegion;
                    context["signing_service"] = authScheme.signingName;
                    const smithyContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$getSmithyContext$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSmithyContext"])(context);
                    const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
                    if (httpAuthOption) {
                        httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
                            signing_region: authScheme.signingRegion,
                            signingRegion: authScheme.signingRegion,
                            signing_service: authScheme.signingName,
                            signingName: authScheme.signingName,
                            signingRegionSet: authScheme.signingRegionSet
                        }, authScheme.properties);
                    }
                }
                return next({
                    ...args
                });
            };
    };
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/getEndpointPlugin.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bindGetEndpointPlugin",
    ()=>bindGetEndpointPlugin,
    "endpointMiddlewareOptions",
    ()=>endpointMiddlewareOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$endpointMiddleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/endpointMiddleware.js [app-rsc] (ecmascript)");
;
const serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: [
        "SERIALIZER"
    ],
    override: true
};
const endpointMiddlewareOptions = {
    step: "serialize",
    tags: [
        "ENDPOINT_PARAMETERS",
        "ENDPOINT_V2",
        "ENDPOINT"
    ],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: serializerMiddlewareOption.name
};
function bindGetEndpointPlugin(getEndpointFromConfig) {
    const endpointMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$endpoints$2f$middleware$2d$endpoint$2f$endpointMiddleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bindEndpointMiddleware"])(getEndpointFromConfig);
    return (config, instructions)=>({
            applyToStack: (clientStack)=>{
                clientStack.addRelativeTo(endpointMiddleware({
                    config,
                    instructions
                }), endpointMiddlewareOptions);
            }
        });
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/resolveEndpointConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bindResolveEndpointConfig",
    ()=>bindResolveEndpointConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$normalizeProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/normalizeProvider.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$toEndpointV1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/toEndpointV1.js [app-rsc] (ecmascript)");
;
;
function bindResolveEndpointConfig(getEndpointFromConfig) {
    return (input)=>{
        const tls = input.tls ?? true;
        const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
        const customEndpointProvider = endpoint != null ? async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$toEndpointV1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toEndpointV1"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$normalizeProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeProvider"])(endpoint)()) : undefined;
        const isCustomEndpoint = !!endpoint;
        const resolvedConfig = Object.assign(input, {
            endpoint: customEndpointProvider,
            tls,
            isCustomEndpoint,
            useDualstackEndpoint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$normalizeProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeProvider"])(useDualstackEndpoint ?? false),
            useFipsEndpoint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$normalizeProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeProvider"])(useFipsEndpoint ?? false),
            ignoreConfiguredEndpointUrls: !!input.ignoreConfiguredEndpointUrls
        });
        let configuredEndpointPromise = undefined;
        resolvedConfig.serviceConfiguredEndpoint = async ()=>{
            if (input.serviceId && !configuredEndpointPromise) {
                configuredEndpointPromise = getEndpointFromConfig(input.serviceId);
            }
            return configuredEndpointPromise;
        };
        return resolvedConfig;
    };
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/service-customizations/s3.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOT_PATTERN",
    ()=>DOT_PATTERN,
    "S3_HOSTNAME_PATTERN",
    ()=>S3_HOSTNAME_PATTERN,
    "isArnBucketName",
    ()=>isArnBucketName,
    "isDnsCompatibleBucketName",
    ()=>isDnsCompatibleBucketName,
    "resolveParamsForS3",
    ()=>resolveParamsForS3
]);
const resolveParamsForS3 = async (endpointParams)=>{
    const bucket = endpointParams?.Bucket || "";
    if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
    } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
    }
    return endpointParams;
};
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
const DOT_PATTERN = /\./;
const S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
const isDnsCompatibleBucketName = (bucketName)=>DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
const isArnBucketName = (bucketName)=>{
    const [arn, partition, service, , , bucket] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = Boolean(isArn && partition && service && bucket);
    if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return isValidArn;
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extendedEncodeURIComponent",
    ()=>extendedEncodeURIComponent
]);
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/protocols/querystring-builder/buildQueryString.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildQueryString",
    ()=>buildQueryString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$util$2d$uri$2d$escape$2f$escape$2d$uri$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/protocols/util-uri-escape/escape-uri.js [app-rsc] (ecmascript)");
;
function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()){
        const value = query[key];
        key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$util$2d$uri$2d$escape$2f$escape$2d$uri$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeUri"])(key);
        if (Array.isArray(value)) {
            for(let i = 0, iLen = value.length; i < iLen; i++){
                parts.push(`${key}=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$util$2d$uri$2d$escape$2f$escape$2d$uri$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeUri"])(value[i])}`);
            }
        } else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$util$2d$uri$2d$escape$2f$escape$2d$uri$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeUri"])(value)}`;
            }
            parts.push(qsEntry);
        }
    }
    return parts.join("&");
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/protocols/util-uri-escape/escape-uri.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "escapeUri",
    ()=>escapeUri
]);
const escapeUri = (uri)=>encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c)=>`%${c.charCodeAt(0).toString(16).toUpperCase()}`;
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/serde/is-array-buffer/is-array-buffer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isArrayBuffer",
    ()=>isArrayBuffer
]);
const isArrayBuffer = (arg)=>typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-buffer-from/buffer-from.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromArrayBuffer",
    ()=>fromArrayBuffer,
    "fromString",
    ()=>fromString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$is$2d$array$2d$buffer$2f$is$2d$array$2d$buffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/is-array-buffer/is-array-buffer.js [app-rsc] (ecmascript)");
;
const fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$is$2d$array$2d$buffer$2f$is$2d$array$2d$buffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArrayBuffer"])(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return Buffer.from(input, offset, length);
};
const fromString = (input, encoding)=>{
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? Buffer.from(input, encoding) : Buffer.from(input);
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-hex-encoding/hex-encoding.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromHex",
    ()=>fromHex,
    "toHex",
    ()=>toHex
]);
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for(let i = 0; i < 256; i++){
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for(let i = 0; i < encoded.length; i += 2){
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        } else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
function toHex(bytes) {
    let out = "";
    for(let i = 0; i < bytes.byteLength; i++){
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/fromUtf8.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromUtf8",
    ()=>fromUtf8
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$buffer$2d$from$2f$buffer$2d$from$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-buffer-from/buffer-from.js [app-rsc] (ecmascript)");
;
const fromUtf8 = (input)=>{
    const buf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$buffer$2d$from$2f$buffer$2d$from$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromString"])(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUint8Array.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toUint8Array",
    ()=>toUint8Array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$fromUtf8$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/fromUtf8.js [app-rsc] (ecmascript)");
;
const toUint8Array = (data)=>{
    if (data instanceof Uint8Array) {
        return data;
    }
    if (typeof data === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$fromUtf8$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromUtf8"])(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/transport/getSmithyContext.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSmithyContext",
    ()=>getSmithyContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$types$2f$dist$2d$es$2f$middleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/types/dist-es/middleware.js [app-rsc] (ecmascript)");
;
const getSmithyContext = (context)=>context[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$types$2f$dist$2d$es$2f$middleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SMITHY_CONTEXT_KEY"]] || (context[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$types$2f$dist$2d$es$2f$middleware$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SMITHY_CONTEXT_KEY"]] = {});
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/transport/hasOwn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasOwn",
    ()=>hasOwn
]);
function hasOwn(o, k) {
    return Object.prototype.hasOwnProperty.call(o, k);
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/transport/httpRequest.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HttpRequest",
    ()=>HttpRequest
]);
class HttpRequest {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(options){
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
    }
    static clone(request) {
        const cloned = new HttpRequest({
            ...request,
            headers: {
                ...request.headers
            }
        });
        if (cloned.query) {
            cloned.query = cloneQuery(cloned.query);
        }
        return cloned;
    }
    static isInstance(request) {
        if (!request) {
            return false;
        }
        const req = request;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
        return HttpRequest.clone(this);
    }
}
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName)=>{
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [
                ...param
            ] : param
        };
    }, {});
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/transport/normalizeProvider.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeProvider",
    ()=>normalizeProvider
]);
const normalizeProvider = (input)=>{
    if (typeof input === "function") return input;
    const promisified = Promise.resolve(input);
    return ()=>promisified;
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/transport/parseQueryString.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseQueryString",
    ()=>parseQueryString
]);
function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")){
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            } else if (Array.isArray(query[key])) {
                query[key].push(value);
            } else {
                query[key] = [
                    query[key],
                    value
                ];
            }
        }
    }
    return query;
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/transport/parseUrl.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseUrl",
    ()=>parseUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$parseQueryString$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/parseQueryString.js [app-rsc] (ecmascript)");
;
const parseUrl = (url)=>{
    if (typeof url === "string") {
        return parseUrl(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
        query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$parseQueryString$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseQueryString"])(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query
    };
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/transport/toEndpointV1.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toEndpointV1",
    ()=>toEndpointV1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/hasOwn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$parseUrl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/parseUrl.js [app-rsc] (ecmascript)");
;
;
const toEndpointV1 = (endpoint)=>{
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            const v1Endpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$parseUrl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseUrl"])(endpoint.url);
            if (endpoint.headers) {
                v1Endpoint.headers = {};
                for(const name in endpoint.headers){
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOwn"])(endpoint.headers, name)) continue;
                    v1Endpoint.headers[name.toLowerCase()] = endpoint.headers[name].join(", ");
                }
            }
            return v1Endpoint;
        }
        return endpoint;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$parseUrl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseUrl"])(endpoint);
};
}),
"[project]/node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderFormatter",
    ()=>HeaderFormatter,
    "Int64",
    ()=>Int64
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/hasOwn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-hex-encoding/hex-encoding.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$fromUtf8$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/fromUtf8.js [app-rsc] (ecmascript)");
;
;
class HeaderFormatter {
    format(headers) {
        const chunks = [];
        for(const headerName in headers){
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOwn"])(headers, headerName)) continue;
            const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$fromUtf8$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromUtf8"])(headerName);
            chunks.push(Uint8Array.from([
                bytes.byteLength
            ]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes)=>carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks){
            out.set(chunk, position);
            position += chunk.byteLength;
        }
        return out;
    }
    formatHeaderValue(header) {
        switch(header.type){
            case "boolean":
                return Uint8Array.from([
                    header.value ? 0 : 1
                ]);
            case "byte":
                return Uint8Array.from([
                    2,
                    header.value
                ]);
            case "short":
                const shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                const intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                const longBytes = new Uint8Array(9);
                longBytes[0] = 5;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6);
                binView.setUint16(1, header.value.byteLength, false);
                const binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                const utf8Bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$fromUtf8$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromUtf8"])(header.value);
                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                const strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                const tsBytes = new Uint8Array(9);
                tsBytes[0] = 8;
                tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error(`Invalid UUID received: ${header.value}`);
                }
                const uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9;
                uuidBytes.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromHex"])(header.value.replace(/-/g, "")), 1);
                return uuidBytes;
        }
    }
}
var HEADER_VALUE_TYPE;
(function(HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
class Int64 {
    bytes;
    constructor(bytes){
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    static fromNumber(number) {
        if (number > 9_223_372_036_854_775_807 || number < -9_223_372_036_854_775_808) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for(let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256){
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    }
    valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 0b10000000;
        if (negative) {
            negate(bytes);
        }
        return parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toHex"])(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
function negate(bytes) {
    for(let i = 0; i < 8; i++){
        bytes[i] ^= 0xff;
    }
    for(let i = 7; i > -1; i--){
        bytes[i]++;
        if (bytes[i] !== 0) break;
    }
}
}),
"[project]/node_modules/@smithy/signature-v4/dist-es/SignatureV4.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignatureV4",
    ()=>SignatureV4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-hex-encoding/hex-encoding.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$toUint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUint8Array.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$HeaderFormatter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$SignatureV4Base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$credentialDerivation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$getCanonicalHeaders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$getPayloadHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$headerUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/headerUtil.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$moveHeadersToQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$prepareRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/prepareRequest.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
class SignatureV4 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$SignatureV4Base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignatureV4Base"] {
    headerFormatter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$HeaderFormatter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeaderFormatter"]();
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }){
        super({
            applyChecksum,
            credentials,
            region,
            service,
            sha256,
            uriEscapePath
        });
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { longDate, shortDate } = this.formatDate(signingDate);
        if (expiresIn > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_PRESIGNED_TTL"]) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$credentialDerivation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createScope"])(shortDate, region, signingService ?? this.service);
        const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$moveHeadersToQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["moveHeadersToQuery"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$prepareRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prepareRequest"])(originalRequest), {
            unhoistableHeaders,
            hoistableHeaders
        });
        if (credentials.sessionToken) {
            request.query[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOKEN_QUERY_PARAM"]] = credentials.sessionToken;
        }
        request.query[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALGORITHM_QUERY_PARAM"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALGORITHM_IDENTIFIER"];
        request.query[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CREDENTIAL_QUERY_PARAM"]] = `${credentials.accessKeyId}/${scope}`;
        request.query[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AMZ_DATE_QUERY_PARAM"]] = longDate;
        request.query[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EXPIRES_QUERY_PARAM"]] = expiresIn.toString(10);
        const canonicalHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$getCanonicalHeaders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCanonicalHeaders"])(request, unsignableHeaders, signableHeaders);
        request.query[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SIGNED_HEADERS_QUERY_PARAM"]] = this.getCanonicalHeaderList(canonicalHeaders);
        request.query[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SIGNATURE_QUERY_PARAM"]] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$getPayloadHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPayloadHash"])(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        } else if (toSign.message) {
            return this.signMessage(toSign, options);
        } else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService, eventStreamCredentials }) {
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate, longDate } = this.formatDate(signingDate);
        const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$credentialDerivation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createScope"])(shortDate, region, signingService ?? this.service);
        const hashedPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$getPayloadHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPayloadHash"])({
            headers: {},
            body: payload
        }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toHex"])(await hash.digest());
        const stringToSign = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EVENT_ALGORITHM_IDENTIFIER"],
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload
        ].join("\n");
        return this.signString(stringToSign, {
            signingDate,
            signingRegion: region,
            signingService,
            eventStreamCredentials
        });
    }
    async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService, eventStreamCredentials }) {
        const promise = this.signEvent({
            headers: this.headerFormatter.format(signableMessage.message.headers),
            payload: signableMessage.message.body
        }, {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature,
            eventStreamCredentials
        });
        return promise.then((signature)=>{
            return {
                message: signableMessage.message,
                signature
            };
        });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService, eventStreamCredentials } = {}) {
        const credentials = eventStreamCredentials ?? await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate } = this.formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$toUint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toUint8Array"])(stringToSign));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toHex"])(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$prepareRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prepareRequest"])(requestToSign);
        const { longDate, shortDate } = this.formatDate(signingDate);
        const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$credentialDerivation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createScope"])(shortDate, region, signingService ?? this.service);
        request.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AMZ_DATE_HEADER"]] = longDate;
        if (credentials.sessionToken) {
            request.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOKEN_HEADER"]] = credentials.sessionToken;
        }
        const payloadHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$getPayloadHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPayloadHash"])(request, this.sha256);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$headerUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasHeader"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA256_HEADER"], request.headers) && this.applyChecksum) {
            request.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA256_HEADER"]] = payloadHash;
        }
        const canonicalHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$getCanonicalHeaders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCanonicalHeaders"])(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AUTH_HEADER"]] = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALGORITHM_IDENTIFIER"]} ` + `Credential=${credentials.accessKeyId}/${scope}, ` + `SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, ` + `Signature=${signature}`;
        return request;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALGORITHM_IDENTIFIER"]);
        const hash = new this.sha256(await keyPromise);
        hash.update((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$toUint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toUint8Array"])(stringToSign));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toHex"])(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$credentialDerivation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSigningKey"])(this.sha256, credentials, shortDate, region, service || this.service);
    }
}
}),
"[project]/node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignatureV4Base",
    ()=>SignatureV4Base
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$normalizeProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/normalizeProvider.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$util$2d$uri$2d$escape$2f$escape$2d$uri$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/protocols/util-uri-escape/escape-uri.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-hex-encoding/hex-encoding.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$toUint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUint8Array.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$getCanonicalQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$utilDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/utilDate.js [app-rsc] (ecmascript)");
;
;
;
;
;
class SignatureV4Base {
    service;
    regionProvider;
    credentialProvider;
    sha256;
    uriEscapePath;
    applyChecksum;
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }){
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$normalizeProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeProvider"])(region);
        this.credentialProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$normalizeProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeProvider"])(credentials);
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$getCanonicalQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCanonicalQuery"])(request)}
${sortedHeaders.map((name)=>`${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
        const hash = new this.sha256();
        hash.update((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$toUint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toUint8Array"])(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${algorithmIdentifier}
${longDate}
${credentialScope}
${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toHex"])(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")){
                if (pathSegment?.length === 0) continue;
                if (pathSegment === ".") continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                } else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$util$2d$uri$2d$escape$2f$escape$2d$uri$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeUri"])(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
        }
    }
    formatDate(now) {
        const longDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$utilDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iso8601"])(now).replace(/[-:]/g, "");
        return {
            longDate,
            shortDate: longDate.slice(0, 8)
        };
    }
    getCanonicalHeaderList(headers) {
        return Object.keys(headers).sort().join(";");
    }
}
}),
"[project]/node_modules/@smithy/signature-v4/dist-es/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALGORITHM_IDENTIFIER",
    ()=>ALGORITHM_IDENTIFIER,
    "ALGORITHM_IDENTIFIER_V4A",
    ()=>ALGORITHM_IDENTIFIER_V4A,
    "ALGORITHM_QUERY_PARAM",
    ()=>ALGORITHM_QUERY_PARAM,
    "ALWAYS_UNSIGNABLE_HEADERS",
    ()=>ALWAYS_UNSIGNABLE_HEADERS,
    "AMZ_DATE_HEADER",
    ()=>AMZ_DATE_HEADER,
    "AMZ_DATE_QUERY_PARAM",
    ()=>AMZ_DATE_QUERY_PARAM,
    "AUTH_HEADER",
    ()=>AUTH_HEADER,
    "CREDENTIAL_QUERY_PARAM",
    ()=>CREDENTIAL_QUERY_PARAM,
    "DATE_HEADER",
    ()=>DATE_HEADER,
    "EVENT_ALGORITHM_IDENTIFIER",
    ()=>EVENT_ALGORITHM_IDENTIFIER,
    "EXPIRES_QUERY_PARAM",
    ()=>EXPIRES_QUERY_PARAM,
    "GENERATED_HEADERS",
    ()=>GENERATED_HEADERS,
    "HOST_HEADER",
    ()=>HOST_HEADER,
    "KEY_TYPE_IDENTIFIER",
    ()=>KEY_TYPE_IDENTIFIER,
    "MAX_CACHE_SIZE",
    ()=>MAX_CACHE_SIZE,
    "MAX_PRESIGNED_TTL",
    ()=>MAX_PRESIGNED_TTL,
    "PROXY_HEADER_PATTERN",
    ()=>PROXY_HEADER_PATTERN,
    "REGION_SET_PARAM",
    ()=>REGION_SET_PARAM,
    "SEC_HEADER_PATTERN",
    ()=>SEC_HEADER_PATTERN,
    "SHA256_HEADER",
    ()=>SHA256_HEADER,
    "SIGNATURE_HEADER",
    ()=>SIGNATURE_HEADER,
    "SIGNATURE_QUERY_PARAM",
    ()=>SIGNATURE_QUERY_PARAM,
    "SIGNED_HEADERS_QUERY_PARAM",
    ()=>SIGNED_HEADERS_QUERY_PARAM,
    "TOKEN_HEADER",
    ()=>TOKEN_HEADER,
    "TOKEN_QUERY_PARAM",
    ()=>TOKEN_QUERY_PARAM,
    "UNSIGNABLE_PATTERNS",
    ()=>UNSIGNABLE_PATTERNS,
    "UNSIGNED_PAYLOAD",
    ()=>UNSIGNED_PAYLOAD
]);
const ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
const CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
const AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
const SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
const EXPIRES_QUERY_PARAM = "X-Amz-Expires";
const SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
const TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
const REGION_SET_PARAM = "X-Amz-Region-Set";
const AUTH_HEADER = "authorization";
const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
const DATE_HEADER = "date";
const GENERATED_HEADERS = [
    AUTH_HEADER,
    AMZ_DATE_HEADER,
    DATE_HEADER
];
const SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
const SHA256_HEADER = "x-amz-content-sha256";
const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
const HOST_HEADER = "host";
const ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true
};
const PROXY_HEADER_PATTERN = /^proxy-/;
const SEC_HEADER_PATTERN = /^sec-/;
const UNSIGNABLE_PATTERNS = [
    /^proxy-/i,
    /^sec-/i
];
const ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
const ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
const EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
const UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
const MAX_CACHE_SIZE = 50;
const KEY_TYPE_IDENTIFIER = "aws4_request";
const MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
}),
"[project]/node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCredentialCache",
    ()=>clearCredentialCache,
    "createScope",
    ()=>createScope,
    "getSigningKey",
    ()=>getSigningKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-hex-encoding/hex-encoding.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$toUint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUint8Array.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/constants.js [app-rsc] (ecmascript)");
;
;
const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service)=>`${shortDate}/${region}/${service}/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_TYPE_IDENTIFIER"]}`;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service)=>{
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toHex"])(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while(cacheQueue.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_CACHE_SIZE"]){
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [
        shortDate,
        region,
        service,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_TYPE_IDENTIFIER"]
    ]){
        key = await hmac(sha256Constructor, key, signable);
    }
    return signingKeyCache[cacheKey] = key;
};
const clearCredentialCache = ()=>{
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey)=>{
        delete signingKeyCache[cacheKey];
    });
};
const hmac = (ctor, secret, data)=>{
    const hash = new ctor(secret);
    hash.update((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$toUint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toUint8Array"])(data));
    return hash.digest();
};
}),
"[project]/node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCanonicalHeaders",
    ()=>getCanonicalHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/constants.js [app-rsc] (ecmascript)");
;
const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders)=>{
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()){
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALWAYS_UNSIGNABLE_HEADERS"] || unsignableHeaders?.has(canonicalHeaderName) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROXY_HEADER_PATTERN"].test(canonicalHeaderName) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SEC_HEADER_PATTERN"].test(canonicalHeaderName)) {
            if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].replace(/[\r\n]/g, " ").replace(/[ \t]+/g, " ").replace(/^ | $/g, "");
    }
    return canonical;
};
}),
"[project]/node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCanonicalQuery",
    ()=>getCanonicalQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/hasOwn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$util$2d$uri$2d$escape$2f$escape$2d$uri$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/protocols/util-uri-escape/escape-uri.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/constants.js [app-rsc] (ecmascript)");
;
;
;
const getCanonicalQuery = ({ query = {} })=>{
    const keys = [];
    const serialized = {};
    for(const key in query){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOwn"])(query, key)) continue;
        if (key.toLowerCase() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SIGNATURE_HEADER"]) {
            continue;
        }
        const encodedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$util$2d$uri$2d$escape$2f$escape$2d$uri$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeUri"])(key);
        keys.push(encodedKey);
        const value = query[key];
        if (typeof value === "string") {
            serialized[encodedKey] = `${encodedKey}=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$util$2d$uri$2d$escape$2f$escape$2d$uri$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeUri"])(value)}`;
        } else if (Array.isArray(value)) {
            serialized[encodedKey] = value.slice(0).reduce((encoded, value)=>encoded.concat([
                    `${encodedKey}=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$util$2d$uri$2d$escape$2f$escape$2d$uri$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeUri"])(value)}`
                ]), []).sort().join("&");
        }
    }
    return keys.sort().map((key)=>serialized[key]).filter((serialized)=>serialized).join("&");
};
}),
"[project]/node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPayloadHash",
    ()=>getPayloadHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/hasOwn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$is$2d$array$2d$buffer$2f$is$2d$array$2d$buffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/is-array-buffer/is-array-buffer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-hex-encoding/hex-encoding.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$toUint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUint8Array.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/constants.js [app-rsc] (ecmascript)");
;
;
;
const getPayloadHash = async ({ headers, body }, hashConstructor)=>{
    for(const headerName in headers){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOwn"])(headers, headerName)) continue;
        if (headerName.toLowerCase() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA256_HEADER"]) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    } else if (typeof body === "string" || ArrayBuffer.isView(body) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$is$2d$array$2d$buffer$2f$is$2d$array$2d$buffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArrayBuffer"])(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$toUint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toUint8Array"])(body));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toHex"])(await hashCtor.digest());
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UNSIGNED_PAYLOAD"];
};
}),
"[project]/node_modules/@smithy/signature-v4/dist-es/headerUtil.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteHeader",
    ()=>deleteHeader,
    "getHeaderValue",
    ()=>getHeaderValue,
    "hasHeader",
    ()=>hasHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/hasOwn.js [app-rsc] (ecmascript)");
;
const hasHeader = (soughtHeader, headers)=>{
    soughtHeader = soughtHeader.toLowerCase();
    for(const headerName in headers){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOwn"])(headers, headerName)) continue;
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};
const getHeaderValue = (soughtHeader, headers)=>{
    soughtHeader = soughtHeader.toLowerCase();
    for(const headerName in headers){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOwn"])(headers, headerName)) continue;
        if (soughtHeader === headerName.toLowerCase()) {
            return headers[headerName];
        }
    }
    return undefined;
};
const deleteHeader = (soughtHeader, headers)=>{
    soughtHeader = soughtHeader.toLowerCase();
    for(const headerName in headers){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOwn"])(headers, headerName)) continue;
        if (soughtHeader === headerName.toLowerCase()) {
            delete headers[headerName];
        }
    }
};
}),
"[project]/node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moveHeadersToQuery",
    ()=>moveHeadersToQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/hasOwn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$httpRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/httpRequest.js [app-rsc] (ecmascript)");
;
;
const moveHeadersToQuery = (request, options = {})=>{
    const { headers, query = {} } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$httpRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpRequest"].clone(request);
    for(const name in headers){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOwn"])(headers, name)) continue;
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query
    };
};
}),
"[project]/node_modules/@smithy/signature-v4/dist-es/prepareRequest.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prepareRequest",
    ()=>prepareRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/hasOwn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$httpRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/transport/httpRequest.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/signature-v4/dist-es/constants.js [app-rsc] (ecmascript)");
;
;
;
const prepareRequest = (request)=>{
    request = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$httpRequest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpRequest"].clone(request);
    for(const headerName in request.headers){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$transport$2f$hasOwn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOwn"])(request.headers, headerName)) continue;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GENERATED_HEADERS"].indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};
}),
"[project]/node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signatureV4aContainer",
    ()=>signatureV4aContainer
]);
const signatureV4aContainer = {
    SignatureV4a: null
};
}),
"[project]/node_modules/@smithy/signature-v4/dist-es/utilDate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iso8601",
    ()=>iso8601,
    "toDate",
    ()=>toDate
]);
const iso8601 = (time)=>toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z");
const toDate = (time)=>{
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};
}),
"[project]/node_modules/@smithy/types/dist-es/middleware.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SMITHY_CONTEXT_KEY",
    ()=>SMITHY_CONTEXT_KEY
]);
const SMITHY_CONTEXT_KEY = "__smithy_context";
}),
"[project]/node_modules/@smithy/types/dist-es/profile.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IniSectionType",
    ()=>IniSectionType
]);
var IniSectionType;
(function(IniSectionType) {
    IniSectionType["PROFILE"] = "profile";
    IniSectionType["SSO_SESSION"] = "sso-session";
    IniSectionType["SERVICES"] = "services";
})(IniSectionType || (IniSectionType = {}));
}),
"[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/node_modules/escape-html/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */ /**
 * Module variables.
 * @private
 */ var matchHtmlRegExp = /["'&<>]/;
/**
 * Module exports.
 * @public
 */ module.exports = escapeHtml;
/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */ function escapeHtml(string) {
    var str = '' + string;
    var match = matchHtmlRegExp.exec(str);
    if (!match) {
        return str;
    }
    var escape;
    var html = '';
    var index = 0;
    var lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escape = '&quot;';
                break;
            case 38:
                escape = '&amp;';
                break;
            case 39:
                escape = '&#39;';
                break;
            case 60:
                escape = '&lt;';
                break;
            case 62:
                escape = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escape;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
}),
"[project]/node_modules/uuid/dist-node/native.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomUUID"]
};
}),
"[project]/node_modules/uuid/dist-node/regex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/node_modules/uuid/dist-node/rng.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256);
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomFillSync"])(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/node_modules/uuid/dist-node/stringify.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist-node/validate.js [app-rsc] (ecmascript)");
;
const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/node_modules/uuid/dist-node/v4.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist-node/native.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist-node/stringify.js [app-rsc] (ecmascript)");
;
;
;
function _v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    return _v4(options, buf, offset);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/node_modules/uuid/dist-node/v4.js [app-rsc] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist-node/v4.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/uuid/dist-node/validate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist-node/regex.js [app-rsc] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
]})(),
"[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs, [project]/node_modules/@aws-sdk/client-s3)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("@aws-sdk/client-s3-ecbef8e33fd0b8f0", () => require("@aws-sdk/client-s3-ecbef8e33fd0b8f0"));

module.exports = mod;
}),
"[project]/node_modules/bson-objectid/objectid.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var MACHINE_ID = Math.floor(Math.random() * 0xFFFFFF);
var index = ObjectID.index = parseInt(Math.random() * 0xFFFFFF, 10);
var pid = (typeof process === 'undefined' || typeof process.pid !== 'number' ? Math.floor(Math.random() * 100000) : process.pid) % 0xFFFF;
// <https://github.com/williamkapke/bson-objectid/pull/51>
// Attempt to fallback Buffer if _Buffer is undefined (e.g. for Node.js).
// Worst case fallback to null and handle with null checking before using.
var BufferCtr = (()=>{
    try {
        return _Buffer;
    } catch (_) {
        try {
            return Buffer;
        } catch (_) {
            return null;
        }
    }
})();
/**
 * Determine if an object is Buffer
 *
 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * License:  MIT
 *
 */ var isBuffer = function(obj) {
    return !!(obj != null && obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj));
};
// Precomputed hex table enables speedy hex string conversion
var hexTable = [];
for(var i = 0; i < 256; i++){
    hexTable[i] = (i <= 15 ? '0' : '') + i.toString(16);
}
// Regular expression that checks for hex value
var checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');
// Lookup tables
var decodeLookup = [];
i = 0;
while(i < 10)decodeLookup[0x30 + i] = i++;
while(i < 16)decodeLookup[0x41 - 10 + i] = decodeLookup[0x61 - 10 + i] = i++;
/**
 * Create a new immutable ObjectID instance
 *
 * @class Represents the BSON ObjectID type
 * @param {String|Number} id Can be a 24 byte hex string, 12 byte binary string or a Number.
 * @return {Object} instance of ObjectID.
 */ function ObjectID(id) {
    if (!(this instanceof ObjectID)) return new ObjectID(id);
    if (id && (id instanceof ObjectID || id._bsontype === "ObjectID")) return id;
    this._bsontype = 'ObjectID';
    // The most common usecase (blank id, new objectId instance)
    if (id == null || typeof id === 'number') {
        // Generate a new id
        this.id = this.generate(id);
        // Return the object
        return;
    }
    // Check if the passed in id is valid
    var valid = ObjectID.isValid(id);
    // Throw an error if it's not a valid setup
    if (!valid && id != null) {
        throw new Error('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    } else if (valid && typeof id === 'string' && id.length === 24) {
        return ObjectID.createFromHexString(id);
    } else if (id != null && id.length === 12) {
        // assume 12 byte string
        this.id = id;
    } else if (id != null && typeof id.toHexString === 'function') {
        // Duck-typing to support ObjectId from different npm packages
        return id;
    } else {
        throw new Error('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    }
}
module.exports = ObjectID;
ObjectID.default = ObjectID;
/**
 * Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.
 *
 * @param {Number} time an integer number representing a number of seconds.
 * @return {ObjectID} return the created ObjectID
 * @api public
 */ ObjectID.createFromTime = function(time) {
    time = parseInt(time, 10) % 0xFFFFFFFF;
    return new ObjectID(hex(8, time) + "0000000000000000");
};
/**
 * Creates an ObjectID from a hex string representation of an ObjectID.
 *
 * @param {String} hexString create a ObjectID from a passed in 24 byte hexstring.
 * @return {ObjectID} return the created ObjectID
 * @api public
 */ ObjectID.createFromHexString = function(hexString) {
    // Throw an error if it's not a valid setup
    if (typeof hexString === 'undefined' || hexString != null && hexString.length !== 24) {
        throw new Error('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    }
    // Calculate lengths
    var data = '';
    var i = 0;
    while(i < 24){
        data += String.fromCharCode(decodeLookup[hexString.charCodeAt(i++)] << 4 | decodeLookup[hexString.charCodeAt(i++)]);
    }
    return new ObjectID(data);
};
/**
 * Checks if a value is a valid bson ObjectId
 *
 * @param {String} objectid Can be a 24 byte hex string or an instance of ObjectID.
 * @return {Boolean} return true if the value is a valid bson ObjectID, return false otherwise.
 * @api public
 *
 * THE NATIVE DOCUMENTATION ISN'T CLEAR ON THIS GUY!
 * http://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html#objectid-isvalid
 */ ObjectID.isValid = function(id) {
    if (id == null) return false;
    if (typeof id === 'number') {
        return true;
    }
    if (typeof id === 'string') {
        return id.length === 12 || id.length === 24 && checkForHexRegExp.test(id);
    }
    if (id instanceof ObjectID) {
        return true;
    }
    // <https://github.com/williamkapke/bson-objectid/issues/53>
    if (isBuffer(id)) {
        return ObjectID.isValid(id.toString('hex'));
    }
    // Duck-Typing detection of ObjectId like objects
    // <https://github.com/williamkapke/bson-objectid/pull/51>
    if (typeof id.toHexString === 'function') {
        if (BufferCtr && (id.id instanceof BufferCtr || typeof id.id === 'string')) {
            return id.id.length === 12 || id.id.length === 24 && checkForHexRegExp.test(id.id);
        }
    }
    return false;
};
ObjectID.prototype = {
    constructor: ObjectID,
    /**
   * Return the ObjectID id as a 24 byte hex string representation
   *
   * @return {String} return the 24 byte hex string representation.
   * @api public
   */ toHexString: function() {
        if (!this.id || !this.id.length) {
            throw new Error('invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [' + JSON.stringify(this.id) + ']');
        }
        if (this.id.length === 24) {
            return this.id;
        }
        if (isBuffer(this.id)) {
            return this.id.toString('hex');
        }
        var hexString = '';
        for(var i = 0; i < this.id.length; i++){
            hexString += hexTable[this.id.charCodeAt(i)];
        }
        return hexString;
    },
    /**
   * Compares the equality of this ObjectID with `otherID`.
   *
   * @param {Object} otherId ObjectID instance to compare against.
   * @return {Boolean} the result of comparing two ObjectID's
   * @api public
   */ equals: function(otherId) {
        if (otherId instanceof ObjectID) {
            return this.toString() === otherId.toString();
        } else if (typeof otherId === 'string' && ObjectID.isValid(otherId) && otherId.length === 12 && isBuffer(this.id)) {
            return otherId === this.id.toString('binary');
        } else if (typeof otherId === 'string' && ObjectID.isValid(otherId) && otherId.length === 24) {
            return otherId.toLowerCase() === this.toHexString();
        } else if (typeof otherId === 'string' && ObjectID.isValid(otherId) && otherId.length === 12) {
            return otherId === this.id;
        } else if (otherId != null && (otherId instanceof ObjectID || otherId.toHexString)) {
            return otherId.toHexString() === this.toHexString();
        } else {
            return false;
        }
    },
    /**
   * Returns the generation date (accurate up to the second) that this ID was generated.
   *
   * @return {Date} the generation date
   * @api public
   */ getTimestamp: function() {
        var timestamp = new Date();
        var time;
        if (isBuffer(this.id)) {
            time = this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24;
        } else {
            time = this.id.charCodeAt(3) | this.id.charCodeAt(2) << 8 | this.id.charCodeAt(1) << 16 | this.id.charCodeAt(0) << 24;
        }
        timestamp.setTime(Math.floor(time) * 1000);
        return timestamp;
    },
    /**
  * Generate a 12 byte id buffer used in ObjectID's
  *
  * @method
  * @param {number} [time] optional parameter allowing to pass in a second based timestamp.
  * @return {string} return the 12 byte id buffer string.
  */ generate: function(time) {
        if ('number' !== typeof time) {
            time = ~~(Date.now() / 1000);
        }
        //keep it in the ring!
        time = parseInt(time, 10) % 0xFFFFFFFF;
        var inc = next();
        return String.fromCharCode(time >> 24 & 0xFF, time >> 16 & 0xFF, time >> 8 & 0xFF, time & 0xFF, MACHINE_ID >> 16 & 0xFF, MACHINE_ID >> 8 & 0xFF, MACHINE_ID & 0xFF, pid >> 8 & 0xFF, pid & 0xFF, inc >> 16 & 0xFF, inc >> 8 & 0xFF, inc & 0xFF);
    }
};
function next() {
    return index = (index + 1) % 0xFFFFFF;
}
function hex(length, n) {
    n = n.toString(16);
    return n.length === length ? n : "00000000".substring(n.length, length) + n;
}
function buffer(str) {
    var i = 0, out = [];
    if (str.length === 24) for(; i < 24; out.push(parseInt(str[i] + str[i + 1], 16)), i += 2);
    else if (str.length === 12) for(; i < 12; out.push(str.charCodeAt(i)), i++);
    return out;
}
var inspect = Symbol && Symbol.for && Symbol.for('nodejs.util.inspect.custom') || 'inspect';
/**
 * Converts to a string representation of this Id.
 *
 * @return {String} return the 24 byte hex string representation.
 * @api private
 */ ObjectID.prototype[inspect] = function() {
    return "ObjectID(" + this + ")";
};
ObjectID.prototype.toJSON = ObjectID.prototype.toHexString;
ObjectID.prototype.toString = ObjectID.prototype.toHexString;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1neqw9sc37733._.js.map