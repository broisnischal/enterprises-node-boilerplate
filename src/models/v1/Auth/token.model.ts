import mongoose, { Document, Schema, Types } from 'mongoose';

import ModelEnum from '~/enum/v1/model.enum';

export interface IToken extends Document {
  user: Types.ObjectId;
  type: string;
  userModel: string;
}

const tokenSchema = new Schema<IToken>({
  user: {
    type: Schema.Types.ObjectId,
    refPath: 'userModel',
    index: {
      unique: true,
      background: true,
    },
  },
  userModel: {
    type: String,
    enum: ['Agent', 'Admin', 'User'],
  },
  type: {
    type: String,
    enum: ModelEnum.token.type,
    required: true,
  },
});

type tokenModelType = mongoose.Model<IToken>;

const tokenModel: tokenModelType = mongoose.model<IToken>('Token', tokenSchema);

export default tokenModel;
