/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
export interface ICombinedPublish {
    topic?: string;
    messageId?: number;
    payload?: string;
}
export interface ICombinedPublishArgs {
    topic?: string;
    messageId?: number;
    payload?: string;
}
export const CombinedPublishCodec: thrift.IStructCodec<ICombinedPublishArgs, ICombinedPublish> = {
    encode(args: ICombinedPublishArgs, output: thrift.TProtocol): void {
        const obj: any = {
            topic: args.topic,
            messageId: args.messageId,
            payload: args.payload
        };
        output.writeStructBegin("CombinedPublish");
        if (obj.topic != null) {
            output.writeFieldBegin("topic", thrift.TType.STRING, 1);
            output.writeString(obj.topic);
            output.writeFieldEnd();
        }
        if (obj.messageId != null) {
            output.writeFieldBegin("messageId", thrift.TType.I32, 2);
            output.writeI32(obj.messageId);
            output.writeFieldEnd();
        }
        if (obj.payload != null) {
            output.writeFieldBegin("payload", thrift.TType.STRING, 3);
            output.writeString(obj.payload);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): ICombinedPublish {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.STRING) {
                        const value_1: string = input.readString();
                        _args.topic = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.I32) {
                        const value_2: number = input.readI32();
                        _args.messageId = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.payload = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            topic: _args.topic,
            messageId: _args.messageId,
            payload: _args.payload
        };
    }
};
export class CombinedPublish extends thrift.StructLike implements ICombinedPublish {
    public topic?: string;
    public messageId?: number;
    public payload?: string;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: ICombinedPublishArgs = {}) {
        super();
        if (args.topic != null) {
            const value_4: string = args.topic;
            this.topic = value_4;
        }
        if (args.messageId != null) {
            const value_5: number = args.messageId;
            this.messageId = value_5;
        }
        if (args.payload != null) {
            const value_6: string = args.payload;
            this.payload = value_6;
        }
    }
    public static read(input: thrift.TProtocol): CombinedPublish {
        return new CombinedPublish(CombinedPublishCodec.decode(input));
    }
    public static write(args: ICombinedPublishArgs, output: thrift.TProtocol): void {
        return CombinedPublishCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return CombinedPublishCodec.encode(this, output);
    }
}
