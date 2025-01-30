import { ReactFCPropsType } from "@/types/main";
import { SseCtx } from "@/utils/ctxs";
import { memo, useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SseCtxContainer: React.FC<ReactFCPropsType> = (props) => {
  const { children } = props;
  const [sseClient, setSseClient] = useState(null);
  const connectSSE = useCallback(() => {
    // 创建 EventSource 实例
    const eventSource = new EventSource(
      `${process.env.BASE_URL}common/sse?uuid=${uuidv4()}`
    );
    eventSource.onerror = () => {
      eventSource.close();
      connectSSE();
    };
    setSseClient(eventSource);
  }, []);
  useEffect(() => {
    connectSSE();
    return () => {
      sseClient?.close?.();
    };
  }, []);
  const initCtxData = { sseClient };
  return <SseCtx.Provider value={initCtxData}>{children}</SseCtx.Provider>;
};

export default memo(SseCtxContainer);
